<template>
    <el-card>
        <el-row :gutter="20" class="header">

            <el-col :span="7">
                <el-input :placeholder="$t('table.placeholder_caigou')"  clearable v-model="queryform.query">
                </el-input>
            </el-col>

            <el-button type="primary" :icon="Search" @click="initGetSpuList">{{ $t('table.search') }}</el-button>
            <el-button type="primary" @click="handleDialogValue">{{$t('table.addcg')}}</el-button>
        </el-row>

        <el-table :data="tableData" style="width:100%">
            <el-table-column :width="item.width" :prop="item.props" :label="$t(`table.${item.label}`)"
                v-for="(item, index) in options" :key="index">

                <template v-slot="{ row }" v-if="item.props === 'mg_state'">
                    <el-switch v-model="row.mg_state" class="ml-2" active-color="#13ce66" inactive-color="#ff4949" />
                </template>

                <template v-slot="{ row }" v-else-if="item.props === 'imgurl'">
                    <el-image style="width: 80px; height: 80px" :src="row.imgurl" lazy:true fit="cover" />
                </template>

                <template v-slot="{ row }" v-else-if="item.props === 'caigou_link'">
                    <a :href="row.caigou_link">采购链接</a>
                </template>

                <template #default v-else-if="item.props === 'action'">
                    <el-button type="primary" size="small" :icon="Edit"></el-button>

                    <el-button type="info" size="small" :icon="Delete" @click="delSpu(row)"></el-button>
                </template>
            </el-table-column>

        </el-table>
    </el-card>
    <Dialog v-model ="dialogVisible" :DialogTitle="DialogTitle"/>

</template>

<script setup>
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getSpu,deleteSpu } from '@/api/spu'
import {ref} from 'vue'
import Dialog from './dialog.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
const DialogTitle = ref ("")
const delSpu = (row) =>{
    ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then( async() => {
        await deleteSpu(row.id)
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
const handleDialogValue = () =>{
    DialogTitle.value = "添加采购单"
    dialogVisible.value = true
}

const options = [
    {
        label: 'caigou_id',
        props: 'caigou_id',
        width: '100px'
    },
    {
        label: 'imgurl',
        props: 'imgurl',
        width: '100px'
    },
    {
        label: 'information',
        props: 'information',
        width: '150px'
    },
    {
        label: 'price_origin',
        props: 'price_origin',
        width: '80px'
    },
    {
        label: 'number',
        props: 'number',
        width: '60px'
    },

    {
        label: 'xiaoji_origin',
        props: 'xiaoji_origin',
        width: '95px'
    },
    {
        label: 'mg_state',
        props: 'mg_state',
        width: '95px'
    },
    {
        label: 'caigou_link',
        props: 'caigou_link',
        width: '80px'
    },
    {
        label: 'shouhou',
        props: 'shouhou',
        width: '70px'
    },
    {
        label: 'action',
        props: 'action',
        width: '250px'
    },

]
const tableData = ref(
    [
    ]
)
const queryform = ref({
  query:''
})
const initGetSpuList = async () => {
    const res = await getSpu(queryform.value)
    tableData.value = res
   
}
initGetSpuList()

</script>

<style scoped>
.header {
    padding-bottom: 16px;
    box-sizing: border-box;
}
</style>
<template>
    <el-card>
        <el-row :gutter="20" class="header">

            <el-col :span="7">
                <el-input :placeholder="$t('table.placeholder_sku')" clearable>
                </el-input>
            </el-col>

            <el-button type="primary" :icon="Search">{{ $t('table.search') }}</el-button>
        </el-row>

        <el-table :data="tableData" style="width: 100%">
            <el-table-column :width="item.width" :prop="item.props" :label="$t(`table.${item.label}`)"
                v-for="(item, index) in options" :key="index">
                <template v-slot="{ row }" v-if="item.props === 'mg_state'">
                    <el-switch v-model="row.mg_state" class="ml-2" active-color="#13ce66" inactive-color="#ff4949" />
                </template>
                <template v-slot="{ row }" v-else-if="item.props === 'imgurl'">
                    <el-image style="width: 80px; height: 80px" :src="row.imgurl" lazy:true fit="cover" />
                </template>
            </el-table-column>

        </el-table>


      </el-card>
 



</template>

<script setup>
    import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
    const options = [
    {
      label:'sku_id',
      props:'sku_id',
       width:'150px'
    },
    {
      label:'imgurl',
      props:'imgurl',
      width:'110px'
    },
    {
      label:'information',
      props:'information',
       width:'150px'
    },
    {
      label:'price',
      props:'price',
      width:'100px'
    },
    {
      label:'number',
      props:'number',
      width:'100px'
    },
    {
      label:'xiaoji',
      props:'xiaoji',
      width:'90px'
    },
    {
      label:'mg_state',
      props:'mg_state',
      width:'100px'
    },
    {
        label: 'shouhou',
        props: 'shouhou',
        width: '70px'
      },
    {
      label:'more',
      props:'more',
      width:'250px'
    },
    
    ]
    const tableData = [
      {
        "sku_id": "AM290001",
        "information": "memememee",
        "imgurl":"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "price": "70",
        "number": 1,
        "xiaoji": "70",
        "mg_state": true,
        "shouhou":"",
        "more": "请快快发货,如果喜欢还会继续下单,谢谢！", 
        
      },
      {
        "sku_id": "AM290002",
        "information": "980*1",
        "imgurl":"https://image.pushauction.com/0/0/c0f7bcf9-f5af-4291-8da7-ab1626abcd33/8b2f0f6a-70b2-4942-a17a-72de19113138.jpg",
        "price": "220",
        "number": 1,
        "xiaoji": "220",
        "mg_state": true,
        "shouhou":"",
        "more": "么么哒", 
        
      },
      {
        "sku_id": "AM290003",
        "information": "980*1",
        "imgurl":"https://image.pushauction.com/0/0/c0f7bcf9-f5af-4291-8da7-ab1626abcd33/457665ce-ae0f-46a6-a47d-d041b0a4141d.jpg",
        "price": "730",
        "number": 1,
        "xiaoji": "730",
        "mg_state": true,
        "shouhou":"",
        "more": "么么哒", 
        
      },
    ]
    </script>

<style scoped>
     .header{
  padding-bottom: 16px;
  box-sizing: border-box;
 }
</style>
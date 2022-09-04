<template>


    <el-dialog :model-value="dialogVisible" :title="DialogTitle" width="40%"  @close="handleClose">
        <el-form ref="formRef" :model="form" label-width="70px" >
            <el-form-item label="单号:" prop="caigou_id">
                <el-input v-model="form.caigou_id" />
            </el-form-item>
            <el-form-item label="图片链接:" prop="imgurl">
                <el-input v-model="form.imgurl" />
            </el-form-item>
            <el-form-item label="商品信息:" prop="information">
                <el-input v-model="form.information" />
            </el-form-item>
            <el-form-item label="供应价:" prop="price_origin" >
                <el-input v-model="form.price_origin" />
            </el-form-item>
            <el-form-item label="数量:" prop="number">
                <el-input v-model="form.number" />
            </el-form-item>
            <el-form-item label="供应价总计:" prop="xiaoji_origin">
                <el-input v-model="form.xiaoji_origin" />
            </el-form-item>
            <el-form-item label="采购单状态:" prop="mg_state">
                <el-input v-model="form.mg_state" />
            </el-form-item>
            <el-form-item label="采购链接:" prop="caigou_link">
                <el-input v-model="form.caigou_link" />
            </el-form-item>
            <el-form-item label="售后:" prop="shouhou">
                <el-input v-model="form.shouhou" />
            </el-form-item>
        </el-form>
        
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">Cancel</el-button>
                <el-button type="primary" @click="handleConfirm">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { defineEmits,ref,defineProps} from 'vue';
import {addSpu} from "@/api/spu"
 defineProps({
    DialogTitle:{
        type:String,
        default:'',
        required:true
    }
 })
const emits = defineEmits(['update:modelValue'])
const handleClose = () => {
    emits('update:modelValue', false)
}
const handleConfirm = async() => {
     await addSpu(form.value)
      handleClose()
}

const formRef = ref(null)
const form = ref({
    caigou_id:"",
    imgurl:"",
    information:"",
    price_origin:"",
    number:"",
    xiaoji_origin:"",
    mg_state:true,
    caigou_link:"",
    shouhou:""
})

// const rules = ref({

// })
</script>
<template>
   <el-dropdown @command="handleCommand">
      <el-image style="width: 30px; height: 30px" :src="imgurl" lazy:true fit="cover" />
     <template #dropdown>
       <el-dropdown-menu>
         <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'"
           >中文</el-dropdown-item
         >
         <el-dropdown-item command="en" :disabled="currentLanguage === 'en'"
           >English</el-dropdown-item
         >
       </el-dropdown-menu>
     </template>
   </el-dropdown>
 </template>
 
 <script setup>
 import { useI18n } from 'vue-i18n'
 import { computed ,ref} from 'vue'
 import { useStore } from 'vuex'
 const i18n = useI18n()
 const store = useStore()
 const imgurl =ref(
   "https://image.pushauction.com/0/0/c0f7bcf9-f5af-4291-8da7-ab1626abcd33/08edbb18-8d99-4076-861f-0d5482a4ebd7.png"
 )
 const currentLanguage = computed(() => {
   return i18n.locale.value
 })
 
 const handleCommand = (val) => {
   i18n.locale.value = val
   store.commit('data_use/changLang', val)
   localStorage.setItem('lang', val)
 }
 </script>
 
 <style  scoped></style>
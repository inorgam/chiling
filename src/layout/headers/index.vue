<template>

<div class="headers">
    <logo class="logo" />
    <breadcrumb class="breadcrumb"/>
<div class="headers_item">
    <lang class="item" />
    <avatar  class="item"/>
     
    
</div>
</div>
  
</template>
  
<script setup>
   import avatar from './avatar.vue' 
   import lang from './lang.vue'
   import logo from './logo.vue'
   import breadcrumb from './breadcrumb.vue'
</script>
<style scoped>
.headers{
 width:100%;
 height:100%;
 overflow:hidden;
 display:flex;
 justify-content:center;
 align-items:center;
 position: relative;
 padding:0;
}
.breadcrumb{
    margin-left: 15px;
}
.headers_item{
    flex: 1;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    margin-right: 20px;
}
.item{
    display: inline-block;
    margin-left:24px;
    font-size: 22px;
    color: #5a5e66;
    box-sizing: border-box;
    cursor: pointer;
}



</style>
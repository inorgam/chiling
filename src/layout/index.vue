
<template>
  <div class="common-layout">
    <el-container class="all_container">
      <el-header class="header_container"><headers/></el-header>

      <el-container class="main_container">
        <el-aside  class="aside_container"><menus/></el-aside>
        <el-main class="context_container" ><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

  
  
  <script setup>
   import menus from '../layout/menus'
   import headers from '../layout/headers'
  </script>
  
  <style  scoped>
.all_container{
    width:100%;
    height:100%;
}
.aside_container{
  width:200px;
  height:100%
}
.common-layout{
  top:2px;
  left:2px;
  right:0px;
  position: fixed;
  height:100%;
  background-color: #f5eef4;
}
.header_container{
  background-color: #ffffff;
  padding:0;
  height:40px;
  
}
.main_container{
  width:100%;
  top:1px;
  height:100%
 
}
.context_container{
  height:100%;
  background-color: #e4ebbc;
}

  </style>
  
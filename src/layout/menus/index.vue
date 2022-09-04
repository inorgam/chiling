<template>
   
      <!-- <h5 class="mb-2">Custom colors</h5> -->
 

      <el-menu
        active-text-color="#F56C6C"
        background-color="#272637"
        class="el_menu_container"
        :default-active="defaultActive"
        text-color="#E6A23C"
        router
        unique-opened
      
      >

      
        <el-sub-menu
         :index="item.id"
         v-for="(item,index) in menus_list"
         :key="item.id"
        >
        <template #title>
            <el-icon>
                <component :is="item.icon"></component>
            </el-icon>  
            <span>{{ item.authName }}</span>  

        </template>

        <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"       
        >
        {{it.authName}}
       </el-menu-item>
    </el-sub-menu>
       
      </el-menu>
 
  </template>

<script setup>
import {ref}  from 'vue'
  const menus_list = [
//   {
//     "id": 100,
//        "authName": "主页",
//         "path":"home",
//         "icon":"HomeFilled",
//         "children": [
//             {
//                 "id": 1000,
//                 "authName": "--营销数据",
//                 "path": "data"
                
//             },
//             {
//                 "id": 1001,
//                 "authName": "--主页信息",
//                 "path": "home"
                
//             }
//         ],
//       "meta": {
//           "msg": "获取主页成功",
//           "status": 200
//       }
//   },
  {
    "id": 101,
        "authName": "商品",
        "path":"null",
        "icon":"Shop",
        "children": [
            {
                "id": 1010,
                "authName": "--商品管理列表",
                "path": "goods",
                "children": []
            }
        ],
 
      "meta": {
          "msg": "获取菜单列表成功",
          "status": 200
      }
  },
  {
    "id": 102,
        "authName": "采购单",
        "path":"null",
        "icon":"List",
        "children": [
            {
                "id": 1020,
                "authName": "--采购单列表",
                "path": "lists",
                "children": []
            }
        ],
 
      "meta": {
          "msg": "获取采购单成功",
          "status": 200
      }
  },
  
  {
    "id": 103,
        "authName": "用户",
        "path":"null",
        "icon":"User",
        "children": [
            {
                "id": 1030,
                "authName": "--用户列表",
                "path": "user",
                "children": []
            }
        ],
 
      "meta": {
          "msg": "获取菜单列表成功",
          "status": 200
      }
  },
]
const defaultActive = ref(sessionStorage.getItem('path') || '/home')

</script>
<style scoped> 
.el_menu_container{
    height:100vh;
}

</style>
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar  :size="30" :src="imgurl"> </el-avatar>
    </span>
    
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

</template>

<script setup>
import { ref } from 'vue'
const imgurl = ref(
  'https://tse1-mm.cn.bing.net/th/id/R-C.868eae040780c5c4798dd9667df87136?rik=VDjNNoMMekvdGw&riu=http%3a%2f%2fi2.hdslb.com%2fbfs%2farchive%2f77a8feebc94366a3b265644ee8550a67e10277d4.jpg&ehk=QMupbzaAg9ZkC9bt8Sbhzmd30qSefa6QkeSNpsluYH0%3d&risl=&pid=ImgRaw&r=0'
)
const logout = () => {
  store.dispatch('capital/logout')
}
 </script>
<style scope>

 </style>
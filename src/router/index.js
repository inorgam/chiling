import {createRouter, createWebHashHistory} from "vue-router";
import layout from '@/layout/index'

const routes = [ 
    {
        path: "/",
        name: "/",
        redirect:'/home',
        component: layout,
        children:[
          {
            path: 'goods',
            name: 'goods',
            component: () => import('@/views/goods/index.vue')
          },
        {
            path: 'lists',
            name: 'lists',
            component: () => import('@/views/lists/index.vue')
          },
           
              {
                path: 'home',
                name: 'home',
                component: () => import('@/views/homes/index.vue')
              },
          
              {
                path: 'user',
                name: 'user',
                component: () => import('@/views/user/index.vue')
              },
             
        ] 
    },

    {
      path: "/login",
      name: "login",
      component: () => import ( '../views/login/index.vue') 
  }
 
];


const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

export default router



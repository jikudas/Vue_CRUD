import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Admin from '../pages/admin/Admin.vue'
import Products from '../pages/admin/Products.vue'
import ProductEdit from '../pages/admin/ProductEdit.vue'
import ProductCreate from '../pages/admin/ProductCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products
        },
        {
          path: 'products/create',
          name: 'ProductCreate',
          component: ProductCreate
        },
        {
          path: 'product/:id/edit',
          name: 'ProductEdit',
          component: ProductEdit,
          props: true
        }
      ]
    }
  ]
})

export default router

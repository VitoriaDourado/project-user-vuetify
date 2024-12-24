import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import UserList from '@/components/users/UserList.vue'
import UserForm from '@/components/users/UserForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList,
    },
    {
      path: '/users/new',
      name: 'UserForm',
      component: UserForm,
    },
    {
      path: '/users/edit/:matricula',
      name: 'UserFormEdit',
      component: UserForm,
    },
  ],
})

export default router

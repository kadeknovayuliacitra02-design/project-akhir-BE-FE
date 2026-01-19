import CreateForm from "@/components/pages/CreateForm.vue";
import ForgetPassword from "@/components/pages/ForgetPassword.vue";
import ListPage from "@/components/pages/ListPage.vue";
import UpdateForm from "@/components/pages/UpdateForm.vue";
import WebLogin from "@/components/WebLogin.vue";
import WebRegister from "@/components/WebRegister.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListPage
    },
    {
      path: '/login',
      name: 'login',
      component: WebLogin
    },
    {
      path: '/create',
      name: 'create',
      component: CreateForm
    },
    {
      path: '/update/:id',
      name: 'update',
      component: UpdateForm
    },
    {
      path: '/register',
      name: 'register',
      component: WebRegister
    },
    {
      path: '/forget-password,',
      name: 'forget-password',
      component: ForgetPassword
    },
]})
export default router

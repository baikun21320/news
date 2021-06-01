import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Login = () => import('../views/login/Login')
const Register = () => import('../views/login/Register')
const RetrievePass = () => import('../views/login/RetrievePass')
const Userinfo = () => import('../views/userinfo/Userinfo')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/retrievePass',
      component: RetrievePass
    },
    {
      path: '/userinfo',
      component: Userinfo
    },
  ],
  mode: 'history'
})

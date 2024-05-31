// axios 基础的封装
import axios from 'axios'

import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
  //1. 从pinia获取数据
  const userStore = useUserStore()
  //2. 按照后端要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
httpInstance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  const userStore = useUserStore()
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message: error.response.data.message
  })
  //401 token失效处理
  // 1. 清除本地用户数据
  // 2. 跳转到登录页
  if (error.response.status === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(error);
});

export default httpInstance
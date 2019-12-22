import axios from 'axios'
import Vue from 'vue'
import router from './router'
const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})

// 添加请求参数中间件
axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});


// 添加全局响应中间件
http.interceptors.response.use(res => {
    return res
}, err => {
    Vue.prototype.$message.error(err.response.data.message)
    if (err.response.status == 422 && router.history.current.path != '/login') {
        router.push('login')
    }
    return Promise.reject(err);
});

export default http
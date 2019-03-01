import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Register from '../components/Register.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})
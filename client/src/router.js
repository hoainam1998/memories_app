import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import ImagesCollection from './views/Images'

Vue.use(Router)

const routes=new Router({
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/image',
            name: 'image',
            component: ImagesCollection
        }
    ]
})

export default routes;
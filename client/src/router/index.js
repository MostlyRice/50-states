import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
// Connect all the pages together / create routes so they can be accessed by user

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        }
    ]
})
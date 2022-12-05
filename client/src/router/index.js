import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import NotFound from '@/components/NotFound' //connect the NotFound site page / component
import StatesVisited from '@/components/StatesVisited' // connect states visited page

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
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            // set up URL path for statesVisited page
            path: '/statesvisited', // this does not need to match the routes/paths set up-- can be anything
            name: 'StatesVisited',
            component: StatesVisited
        },
        {
            // this need to be LAST
            // https://next.router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
            // above link for more information on setting up 404 not found routes / regex for matching
            path: '/:pathMatch(.*)*', // match anything that's not one of the other routes 
            name: 'NotFound',
            component: NotFound
        },
    ]
})
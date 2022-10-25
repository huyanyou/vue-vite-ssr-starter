import { createRouter as _createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import About from '../views/About/index.vue'

// const modules = import.meta.glob('../views/**/*.vue')
// const routes = Object.keys(modules).map((path) => {
//     const name = path.match(/\.\/views\/(.*)\.vue$/)![1]
//     console.log('router name', name)
//     return {
//         path: `/${name}`,
//         component: modules[path]
//     }
// }
// )

export default function createRouter() {
    const routes = [{
        path: '/',
        name: 'Home',
        component: () => import('../views/Home/index.vue')
    }, {
        path: '/about',
        name: 'About',
        component: () => import('../views/About/index.vue')
    }]
    return _createRouter({
        history: createMemoryHistory(),
        routes
    })
}

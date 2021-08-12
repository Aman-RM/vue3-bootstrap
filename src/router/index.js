import { createRouter, createWebHistory } from 'vue-router'

// Dashboard
import Dashboard from '../dashboard/Dashboard.vue'

// Layout
import LayoutDashboard from '../layouts/LayoutDashboard.vue'

const routes = [
    {
        path: '/',
        component: LayoutDashboard,
        children: [
            {
                path: '/',
                component: Dashboard,
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

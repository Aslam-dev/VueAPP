
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

const routes = [
  {
    path:"/",
    components: import ("@/pages/index.vue"),
  },
  {
    path:"/test",
    components: import ("@/pages/test.vue"),
  },

];
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

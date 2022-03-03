import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/home/Index.vue';
import SearchResult from './pages/home/Search-Result.vue';
import Orders from './pages/orders/Index.vue';
import EditOrder from './pages/orders/Edit-Order.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/edit-order',
    name: 'EditOrder',
    component: EditOrder
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
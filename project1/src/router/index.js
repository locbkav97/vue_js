import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import AddContact from '../components/AddContact.vue'
import ContactLish from '../components/ContactLish.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/products',
        name: 'products',
        component: ProductView
    },
    {
        path: '/add-contact',
        name: 'AddContact',
        component: AddContact
    },
    {
        path: '/contact-list',
        name: 'ContactList',
        component: ContactLish
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
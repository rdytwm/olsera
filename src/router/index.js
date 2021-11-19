import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/admin',
		name: 'Dashboard',
		component: () => import('../views/admin/Index.vue'),
		meta: {auth: true}
	},
	{
		path: '/admin/post/create',
		name: 'Post Create',
		component: () => import('../views/admin/posts/Create.vue'),
		meta: {auth: true}
	},
	{
		path: '/admin/post/edit/:id',
		name: 'Post Edit',
		component: () => import('../views/admin/posts/Edit.vue'),
		meta: {auth: true}
	},
	{
		path: '/:id',
		name: 'Single',
		component: () => import('../views/Single.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach((to, from, next) => {
	const store = JSON.parse(localStorage.getItem('store'));
	if (store) {
		if (to.matched.some(record => record.meta.auth)) {
			if (store.loggedIn) {
				next()
				return
			}
			next('/login')
		} else {
			next()
		}
	}
})

export default router
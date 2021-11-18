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
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/login',
		name: 'Login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue'),
	},
	{
		path: '/admin',
		name: 'Admin-Dashboard',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/admin/Index.vue'),
		meta: {auth: true}
	},	
	{
		path: '/admin/post/create',
		name: 'Admin-Post-Create',
		component: () => import( /* webpackChunkName: "about" */ '../views/posts/Create.vue'),
		meta: {auth: true}
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
<template>
	<!-- navbar -->
	<NavTop @drawerToggle="drawerToggle"/>

	<!-- sidebar -->

	<!-- main -->
	<main class="q-pa-md">
		<aside :class="drawer && 'open'">
			<ul>
				<li>
					<i class="bi bi-house"></i>
					<router-link to="/" @click="drawer = false">Home</router-link>
				</li>
				<li>
					<i class="bi bi-kanban"></i>
					<router-link to="/admin" @click="drawer = false">Admin</router-link>
				</li>
				<li>
					<i class="bi bi-lock-fill"></i>
					<router-link to="/login" @click="drawer = false">Login</router-link>
				</li>
			</ul>
		</aside>
		<router-view/>
	</main>

	<!-- backdrop -->
	<div :class="(drawer && 'show') + ' backdrop'" @click="drawerToggle"/>
</template>

<script>
// Style
import './assets/app.scss';

// Component
import NavTop from './components/NavTop';

export default {
	name: 'App',
	components: {
		NavTop
	},
	beforeCreate() {
		this.$store.commit('initialiseStore');
	},
	data() {
		return {
			drawer: false,
			backdrop: false
		}
	},
	methods: {
		drawerToggle: function() {
			return this.drawer = !this.drawer;
		}
	}
}
</script>

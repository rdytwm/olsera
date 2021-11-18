<template>
	<div v-if="$route.name !== 'Login'" class="navbar">
		<div class="navbar__menu">
			<router-link class="navbar__menu__link" to="/">Home</router-link>
			<router-link class="navbar__menu__link" to="/about">About</router-link>
			<el-button plain @click="$router.push('/admin')">Admin</el-button>
			<el-button v-if="loggedIn" @click="logedOut" plain>Logout</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavTop',
	computed: {
		loggedIn() {
			return this.$store.getters.getLoggedIn;
		}
	},
	methods: {
		async logedOut() {
			await this.$store.dispatch('logedOut');
			return this.$router.push('/');
		}
	}
}
</script>
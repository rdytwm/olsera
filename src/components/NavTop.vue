<template>
	<q-toolbar v-if="$route.name !== 'Login'" class="bg-primary text-white">
		<q-btn flat @click="drawerToggle" round dense icon="menu"/>
		<q-toolbar-title>{{ $route.name }}</q-toolbar-title>
		<q-btn flat v-if="!loggedIn" @click="$router.push('/login')" label="Login"/>
		<q-btn flat v-if="loggedIn" @click="logedOut" label="Logout"/>
		<q-btn flat round dense @click="$router.push('/favorite')" icon="favorite"/>
		<q-btn flat round dense icon="more_vert"/>
	</q-toolbar>
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
		},
		drawerToggle() {
			this.$emit('drawerToggle');
		}
	}
}
</script>
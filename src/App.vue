<template>
	<NavTop/>

	<main>
		<router-view/>
	</main>
</template>

<script>
// Style
import './assets/main.scss';

// Component
import NavTop from './components/NavTop';

export default {
	name: 'App',
	components: {
		NavTop
	},
	beforeCreate() {
		this.$store.commit('initialiseStore');
	}
}
</script>
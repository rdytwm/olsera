<template>
	<div class="q-pa-md" style="max-width: 400px;margin: auto;">
		<q-form
			@submit="handlerSubmit"
			class="q-gutter-md"
		>
			<q-input
				filled
				type="number"
				v-model="form.userId"
				label="ID"
			/>

			<q-input
				filled
				v-model="form.userEmail"
				label="Email"
			/>

			<div>
				<q-btn label="Login" type="submit" color="primary"/>
			</div>
		</q-form>
	</div>
</template>

<script>
// Package
import axios from 'axios';

export default {
	name: 'Login',
	data() {
		return {
			form: {
				userId: null,
				userEmail: null
			},
			loading: false
		}
	},
	created() {
		if (this.$store.getters.getLoggedIn) {
			this.$router.push('/admin');
		}
	},
	methods: {
		async handlerSubmit() {
			try {
				this.loading = true;
				if (this.form.userId) {
					if (this.form.userEmail) {

						const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.form.userId}`);
						if (Object.keys(response.data).length) {
							if (response.data.email === this.form.userEmail) {
								this.loading = false;
								this.$store.dispatch('loggedIn', true);
								this.$store.dispatch('users', response.data);
								this.$router.push('/admin')
							} else {
								console.log("email salah")
								this.loading = false;
							}
						} else {
							this.loading = false;
							console.log("sorry id tidak ditemukan");
						}
					} else {
						this.loading = false;
						console.log("Email canot empty");
					}
				} else {
					this.loading = false;
					console.log("Harap isi User ID");
				}
			}
			catch (error) {
				this.loading = false;
				console.log("pastikan isi id dengan benar!", error)
			}
		}
	}
}
</script>
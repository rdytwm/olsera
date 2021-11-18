<template>
	<div class="container">
		<div class="col-login">
			<div class="card" style="margin-top: 0">
				<router-link to="/" style="text-decoration: none;font-size: 14px;color: #363636;vertical-align: top;font-family: 'Roboto',sans-serif;margin-bottom: 20px;display: block;"><i class="bi-arrow-left"></i> Home</router-link>
				<div class="card-title">
					Login
				</div>

				<div class="form-control">
					<label for="userId">User ID</label>
					<input type="text" name="userId" id="userId" v-model="form.userId">
				</div>
				<div class="form-control">
					<label for="userEmail">Email</label>
					<input type="text" name="userEmail" id="userEmail" v-model="form.userEmail">
				</div>

				<div style="margin-top: 30px">
					<el-button plain @click="handlerSubmit" :loading="loading">Loggin</el-button>
				</div>
			</div>
		</div>
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
						console.log("Response Axios", response);

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
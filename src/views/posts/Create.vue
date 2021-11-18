<template>
	<div class="container">
		<div class="col-login">
			<div class="card" style="margin-top: 0">
				<div class="form-control">
					<label for="title">Title</label>
					<input type="text" name="title" id="title" v-model="form.title">
				</div>
				<div class="form-control">
					<label for="body">Description</label>
					<input name="body" id="body" v-model="form.body">
				</div>

				<div style="margin-top: 30px">
					<el-button plain @click="handlerSubmit" :loading="loading">Submit</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Login',
	data() {
		return {
			form: {
				title: null,
				body: null
			},
			loading: false
		}
	},
	created() {
	},
	methods: {
		async handlerSubmit() {
			try {
				this.loading = true;
				if (this.form.title) {
					if (this.form.body) {
						this.loading = false;
						this.$store.dispatch('posts', {"title": this.form.title, "body": this.form.body});
						this.$router.push('/admin')
					} else {
						this.loading = false;
						console.log("Description canot empty");
					}
				} else {
					this.loading = false;
					console.log("TItle canot Empty");
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
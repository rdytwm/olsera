<template>
	<div class="q-pa-md" style="max-width: 400px;margin: auto;">
		<q-form
			@submit="handlerSubmit"
			class="q-gutter-md"
		>
			<q-input
				filled
				v-model="form.title"
				label="Title"
			/>

			<q-input
				filled
				v-model="form.body"
				label="Description"
			/>

			<div>
				<q-btn label="Post" type="submit" color="primary"/>
			</div>
		</q-form>
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
						this.$store.dispatch('posts', {id: 'user_posts_' + (this.$store.getters.getPost.length + 1), "title": this.form.title, "body": this.form.body});
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
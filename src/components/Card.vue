<template>
	<q-card class="my-card" flat>
		<q-card-section horizontal>
	        <q-card-section style="min-width: 80%">
				<router-link :to="'/' + id" class="text-subtitle2">{{ title }}</router-link>
          		<div style="color: #5a5a5a">{{ description }}</div>
	        </q-card-section>
			<q-card-actions vertical class="justify-around q-px-md">
				<q-btn flat v-if="!admin" round :color="isFavorite(id) ? 'red' : 'grey'" icon="favorite" @click="handlerFavorite"/>
				<q-btn flat v-if="admin" round color="grey" icon="edit_note" @click="$router.push('/admin/post/edit/'+ id)"/>
				<q-btn flat v-if="admin" round color="grey" icon="delete" @click="handlerDelete"/>
			</q-card-actions>
		</q-card-section>
	</q-card>
</template>

<script>
export default {
	name: 'Card',
	props: {
		id: String,
		title: String,
		description: String,
		admin: Boolean
	},
	data() {
		return {}
	},
	methods: {
		handlerFavorite: function() {
			console.log("props", this.$props.id)
			if (!this.isFavorite(this.$props.id))
				return this.$store.dispatch('favorite', {id: this.$props.id});

			return this.$store.dispatch('unFavorite', this.$props.id);
		},
		isFavorite: function(key) {
	        const object = this.$store.getters.getFavorite;

	        for (var i = 0;i < object.length;i++) {
	            if (object[i]?.id === this.$props.id) {
	                return object[i]?.id;
	            }
	        }

	        return false;
		},
		handlerDelete: function() {
			if (this.$props.admin) {
				return this.$store.dispatch('deletePost', this.$props.id);
			}
		}
	}
}
</script>
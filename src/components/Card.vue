<template>
	<div class="card">
		<div class="card-title">{{ title }}</div>
		<div class="card-body">{{ description }}</div>
		<div class="card-footer">
			<div>
				<button class="btn btn-action btn-like">
					<i class="bi-hand-thumbs-up"></i>
				</button>
			</div>
			<div>
				<button class="btn btn-action btn-comment">
					<i class="bi-chat-left-dots-fill"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		title: String,
		description: String
	}
}
</script>
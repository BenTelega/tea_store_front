<template>
	<div>
		<p>{{ cart_item_data.name }}</p>
		<code>{{ cart_item_data.quantity }}</code>
		<button @click="deleteFromCart">delete</button>
	</div>
</template>

<script>
export default {
	name: 'CartItem',
	props: {
		cart_item_data: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {};
	},
	mounted() {
		const cartItemData = this.cart_item_data;
		cartItemData.quantity = 1;
	},
	methods: {
		deleteFromCart() {
			this.$emit(deleteFromCart);
		},
	},
};
</script>

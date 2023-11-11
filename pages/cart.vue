<template>
	<div class="container">
		<div class="row">
			<table class="table">
				<thead>
					<tr>
						<th>Item</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>SubTotal</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in cart" :key="index">
						<td scope="row" v-text="item.name"></td>
						<td>
							<button
								type="button"
								class="btn btn-sm btn-primary"
								@click="$store.commit('cart/increment', index)"
							>
								+
							</button>
							{{ item.quantity }}
							<button type="button" class="btn btn-sm btn-danger">-</button>
						</td>
						<td>{{ productPrice(item.price) }}</td>
						<td v-text="cartLineTotal(item)"></td>
						<td>
							<button
								class="btn btn-sm btn-danger"
								@click="$store.commit('cart/removeFromCart', index)"
							>
								Remove
							</button>
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>Total Amount</td>
						<td v-text="cartQuantity"></td>
						<td></td>
						<td v-text="cartTotal"></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		cart() {
			return this.$store.getters['cart/CART'];
		},
		cartQuantity() {
			return this.cart.reduce((total, item) => total + item.quantity, 0);
		},
		cartTotal() {
			let amount = this.cart.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
			return amount.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			});
		},
	},
	methods: {
		cartLineTotal(item) {
			let amount = item.price * item.quantity;
			return amount.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			});
		},
		productPrice(price) {
			return price.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			});
		},
	},
};
</script>

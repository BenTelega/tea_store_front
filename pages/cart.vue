<template>
	<div class="container mt-2">
		<div class="bg-white">
			<b-table-simple hover small caption-top responsive>
				<b-thead head-variant="">
					<b-tr>
						<b-th>Item</b-th>
						<b-th>Quantity</b-th>
						<b-th>Price</b-th>
						<b-th>SubTotal</b-th>
						<b-th>Actions</b-th>
					</b-tr>
				</b-thead>
				<b-tbody>
					<b-tr v-for="(item, index) in cart" :key="index">
						<b-td scope="row" v-text="item.name"></b-td>
						<b-td>
							<b-button
								class="mr-2"
								size="sm"
								variant="outline-primary"
								@click="$store.commit('cart/increment', index)"
								>-</b-button
							>
							{{ item.quantity }}
							<b-button
								class="ml-2"
								size="sm"
								variant="outline-primary"
								@click="$store.commit('cart/increment', index)"
								>+</b-button
							>
						</b-td>
						<b-td>{{ productPrice(item.price) }}</b-td>
						<b-td v-text="cartLineTotal(item)"></b-td>
						<b-td>
							<button
								class="btn btn-sm btn-danger"
								@click="$store.commit('cart/removeFromCart', index)"
							>
								Remove
							</button>
						</b-td>
					</b-tr>
				</b-tbody>
				<b-tfoot>
					<b-tr></b-tr>
					<b-tr>
						<b-td variant="">Total Quantity</b-td>
						<b-td v-text="cartQuantity"></b-td>
						<b-td variant="">Total Price</b-td>
						<b-td
							class="text-center font-weight-bold"
							colspan="2"
							variant="info"
							v-text="cartTotal"
						></b-td>
					</b-tr>
				</b-tfoot>
			</b-table-simple>
		</div>
		<div class="bg-white py-2 px-2">
			<div class="row">
				<div class="col-6">{{ cartText1 }}</div>
				<div class="col-6">
					<b-container fluid class="p-4">
						<b-row>
							<b-col md="2" v-for="pay in pay_methods" :key="pay.id">
								<b-img
									:src="`https://shoppify-test.ru/${pay.pic}`"
									fluid
									thumbnail
									alt="Fluid image"
								></b-img>
							</b-col>
						</b-row>
					</b-container>
				</div>
			</div>
		</div>
		<div class="bg-white py-2 px-2 mt-2">
			<div class="row">
				<div class="col-12">
					<p>
						{{ cartText2 }}
					</p>
				</div>
			</div>
		</div>
		<div class="bg-white py-2 px-2 mt-2 text-center">
			<b-button>{{ cartButtonText }}</b-button>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {};
	},

	async mounted() {
		await this.fetchCartContent(this.$i18n.locale);
		await this.fetchPayMethods();
	},

	computed: {
		...mapGetters('cart', [
			'cartText1',
			'cartText2',
			'cartButtonText',
			'pay_methods',
		]),

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
		...mapActions('cart', ['fetchCartContent', 'fetchPayMethods']),

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

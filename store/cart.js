export const state = () => ({
	items: [],
	cart: [],
});

export const mutations = {
	setToCart(state, payload) {
		const product = payload.product;
		const quantity = payload.quantity;
		let productInCartIndex = state.cart.findIndex(
			(item) => item.id === product.id
		);
		if (productInCartIndex !== -1) {
			state.cart[productInCartIndex].quantity++;
			return;
		}

		product.quantity = quantity;
		state.cart.push(product);
	},

	increment(state, index) {
		state.cart[index].quantity++;
	},

	removeFromCart: (state, index) => {
		state.cart.splice(index, 1);
	},
};

export const getters = {
	CART(state) {
		return state.cart;
	},
	countCart: (state) => {
		return state.cart.length;
	},
};

export const actions = {
	addToCart({ commit }, payload) {
		commit('setToCart', payload);
	},
	deleteFromCart({ commit }, index) {
		commit('removeFromCart', index);
	},
};

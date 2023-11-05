export const state = () => ({
	cart: [],
});

export const mutations = {
	// setCart: (state, product) => {
	// 	if (state.cart.length) {
	// 		let isProductExist = false;
	// 		state.cart.map(function (item) {
	// 			if (item.id === product.id) {
	// 				isProductExist = true;
	// 				item.quantity++;
	// 			}
	// 		});
	// 		if (!isProductExist) {
	// 			state.cart.push(product);
	// 		}
	// 	} else {
	// 		state.cart.push(product);
	// 	}
	// },
	setToCart(state, payload) {
		state.cart.push(payload);
	},
	removeFromCart: (state, index) => {
		state.cart.splice(index, 1);
	},
};

export const getters = {
	// CART(state) {
	// 	return state.cart;
	// },
	countCart: (state) => {
		return state.cart.length;
	},
};

export const actions = {
	addToCart({ commit }, product) {
		commit('setToCart', product);
	},
	deleteFromCart({ commit }, index) {
		commit('removeFromCart', index);
	},
};

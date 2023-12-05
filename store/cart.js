export const state = () => ({
	cart: [],
	cart_content: {},
	pay_methods: [],
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

	setCartContent(state, data) {
		state.cart_content = data;
	},
	setPayMethods(state, pay_methods) {
		state.pay_methods = pay_methods;
	},
};

export const getters = {
	cartContent(state) {
		return state.cart_content;
	},

	CART(state) {
		return state.cart;
	},

	countCart: (state) => {
		return state.cart.length;
	},
	cartText1(state) {
		return state.cart_content.text1;
	},
	cartText2(state) {
		return state.cart_content.text2;
	},
	cartButtonText(state) {
		return state.cart_content.button_text;
	},
	pay_methods(state) {
		return state.pay_methods;
	},
};

export const actions = {
	addToCart({ commit }, payload) {
		commit('setToCart', payload);
	},
	deleteFromCart({ commit }, index) {
		commit('removeFromCart', index);
	},

	async fetchCartContent({ commit }, locale = null) {
		try {
			// Выполните GET-запрос с использованием Axios
			const response = await this.$axios.get(`/cms/cart/${locale}`);

			commit('setCartContent', response.data);

			return response.data;
		} catch (error) {
			console.error('Ошибка при получении заголовка:', error);
			throw error; // Прокиньте ошибку для обработки в компоненте
		}
	},
	async fetchPayMethods({ commit }) {
		try {
			const response = await this.$axios.get(`/v1/pay_methods`);

			commit('setPayMethods', response.data);

			return response.data;
		} catch (error) {
			// Обработайте ошибку, если запрос не удался
			console.error('Ошибка при получении заголовка:', error);
			throw error; // Прокиньте ошибку для обработки в компоненте
		}
	},
};

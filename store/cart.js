export const state = () => ({
  cart: [],
})

export const mutations = {
  setCart(state, product) {
    state.cart.push(product)
  },
}


export const getters = {
  CART(state) {
    return state.cart
  },
}

export const actions = {
  addToCart({ commit }, product) {
    commit('setCart', product)
  },
}

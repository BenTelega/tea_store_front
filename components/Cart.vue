<template>
  <div class="cart container bg-info mt-3 mb-3 p-3">
    <h1>Cart</h1>
    <CartItem v-for="item in cart_data" :key="item.id" :cart_item_data="item" @deleteFromCart="deleteFromCart"/>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    deleteFromCart() {
      alert('ok')
    }
  }
}
</script>

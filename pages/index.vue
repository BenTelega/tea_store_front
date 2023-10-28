<template>
  <div class="text-center">
    <br />
    <br />
    <nuxt-link to="/store">go to store</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'landing',

  head() {
    return {
      title: 'Welcome',
    }
  },
}
</script>

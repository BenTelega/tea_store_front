<template>
  <b-container class="pt-3">
    <div v-html="about"></div>
  </b-container>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'langing',
  head() {
    return {
      title: 'About',
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchAbout', `${this.$i18n.locale}`)
  },
  computed: {
    about() {
      return this.$store.getters['getAbout']['body']
    },
  }
}
</script>

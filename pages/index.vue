<template>
  <div
    class="d-flex vw-100 vh-100 position-relative p-3 mx-auto flex-column text-center text-white"
  >
    <header class="mb-auto">
      <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
        <b-container class="spec">
          <a class="navbar-brand text-uppercase" to="/">{{
            $t('site.title')
          }}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <b-navbar-nav class="bold-links">
              <b-nav-item :to="localePath('/store', this.$i18n.locale)">{{
                $t('site.store')
              }}</b-nav-item>

              <b-nav-item :to="localePath('/r/about', this.$i18n.locale)">{{
                $t('site.about')
              }}</b-nav-item>

              <b-nav-item :to="localePath('/r/contact', this.$i18n.locale)">{{
                $t('site.contact')
              }}</b-nav-item>
              <b-nav-item :to="localePath('/r/faq', this.$i18n.locale)">{{
                $t('site.faq')
              }}</b-nav-item>

<b-nav-item-dropdown right class="dp">
              <template #button-content>
                <b-img
                  class="mr-1"
                  v-bind="mainProps"
                  rounded
                  :src="`/pic/${currentLocale[0].long_iso}.svg`"
                />
              </template>
              <b-dropdown-item
                v-for="locale in availableLocales"
                :key="locale.code"
                @click="changeLanguage(locale.code)"
              >
                <b-img
                  v-bind="mProps"
                  rounded
                  :src="`/pic/${locale.long_iso}.svg`"
                />

                {{ locale.name }}</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>

            </b-navbar-nav>
          </div>
        </b-container>
      </nav>
    </header>

    <main role="main">
      <b-container class="spec">
        <h1 class="mb-5">{{ landingTitle }}</h1>
        <p class="lead mb-5">
          {{ landingBody }}
        </p>
        <b-button to="/store" size="lg" variant="success" class="shadow"
          >{{ $t('landing.cta') }}</b-button
        >
      </b-container>
    </main>

    <footer class="mt-auto">
      <p class="text-white-50">
        Created with love for
        <a href="" class="text-white">Bro</a>
      </p>
    </footer>
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
  data() {
    return {
      mainProps: {
        width: 18,
        height: 14,
      },
      mProps: {
        width: 26,
        height: 14,
      },
    }
  },
  async mounted() {
    await this.$store.dispatch('landing/fetchTitle', `${this.$i18n.locale}`)
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    landingTitle() {
      return this.$store.getters['landing/getTitle']['title']
    },
    landingBody() {
      return this.$store.getters['landing/getTitle']['body']
    },
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code == this.$i18n.locale)
    },
  },
  methods: {
    
    changeLanguage(lang) {
      this.$i18n.setLocale(lang)
    },
  }
}
</script>

<style>

</style>

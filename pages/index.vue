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
            </b-navbar-nav>
          </div>
        </b-container>
      </nav>
    </header>

    <main role="main">
      <b-container class="spec">
        <h1 class="mb-5">Awesome store.. mmm..</h1>
        <p class="lead mb-5">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <b-button to="/store" size="lg" variant="success" class="shadow"
          >Store now</b-button
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
}
</script>

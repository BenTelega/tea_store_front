<template>
	<div>
		<div
			class="vw-100 vh-100 position-absolute overflow-hidden op"
			:style="styleObject"
		></div>
		<div
			class="d-flex vw-100 vh-100 position-relative p-3 mx-auto flex-column text-center text-white"
		>
			<header class="mb-auto">
				<nav
					class="navbar navbar-expand-lg navbar-dark justify-content-between"
				>
					<b-container class="spec">
						<a class="navbar-brand text-uppercase" to="/">{{ siteTitle }}</a>
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
								<!-- <b-nav-item :to="localePath('/r/faq', this.$i18n.locale)">{{
                $t('site.faq')
              }}</b-nav-item> -->

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
						</div>
					</b-container>
				</nav>
			</header>

			<main role="main">
				<b-container class="spec">
					<h1 class="mb-3">{{ landingTitle }}</h1>
					<p class="lead mb-5">
						{{ landingBody }}
					</p>

					<b-button
						:to="localePath('/store', this.$i18n.locale)"
						size="lg"
						variant="success"
						class="shadow"
						>{{ landingButton }}</b-button
					>
				</b-container>
			</main>
			<footer class="mt-auto">
				<b-container class="spec">
					<h2 class="mb-3">
						{{ $t('site.testmonials') }}
					</h2>
					<Flicking
						:options="{ align: 'center', circular: true }"
						:plugins="plugins"
					>
						<div
							class="p-4 text-center"
							style="width: 480px"
							v-for="(testmonial, i) in testmonials"
							:key="i"
						>
							<div class="speech-bubble-ds">
								{{ testmonial.content }}
								<div class="speech-bubble-ds__arrow"></div>
							</div>
							<b-avatar
								size="50"
								:src="`https://shoppify-test.ru/${testmonial.avatar}`"
							></b-avatar
							>{{ testmonial.title }}
						</div>
						<span slot="viewport" class="flicking-arrow-prev"></span>
						<span slot="viewport" class="flicking-arrow-next"></span>
					</Flicking>
				</b-container>
			</footer>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import { AutoPlay } from '@egjs/flicking-plugins';
import { Arrow } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/arrow.css';
export default {
	name: 'IndexPage',
	layout: 'landing',

	head() {
		return {
			title: this.$store.getters['getSiteConfig']['title'],
		};
	},
	data() {
		return {
			blur: '4px',
			plugins: [new AutoPlay(), new Arrow()],
			mainProps: {
				width: 18,
				height: 14,
			},
			mProps: {
				width: 26,
				height: 14,
			},
		};
	},

	methods: {
		...mapActions('landing', ['fetchLanding', 'fetchTestmonials']),
		...mapActions(['fetchSiteConfig']),

		changeLanguage(lang) {
			this.$i18n.setLocale(lang);
		},
	},
	async mounted() {
		await this.fetchSiteConfig(this.$i18n.locale);
		await this.fetchLanding(this.$i18n.locale);
		await this.fetchTestmonials(this.$i18n.locale);
	},
	computed: {
		...mapGetters('landing', [
			'landingTitle',
			'landingBody',
			'landingButton',
			'landingCover',
			'landingBlur',
			'testmonials',
		]),

		...mapGetters(['siteTitle']),

		styleObject() {
			const imgUrl = this.landingCover;
			const blurVal = this.blur;
			return {
				backgroundImage: `url('${imgUrl}')`,
				filter: `blur(${blurVal})`,
			};
		},

		availableLocales() {
			return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
		},

		currentLocale() {
			return this.$i18n.locales.filter((i) => i.code == this.$i18n.locale);
		},
	},
};
</script>

<style>
/**/

.speech-bubble-ds {
	color: #252422;
	background: #fffcf2;
	border: 1px solid #ffffff;
	border-radius: 16px;
	box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
	font-size: 0.9rem;
	line-height: 0.9;
	margin: 0 auto 30px;
	padding: 15px;
	position: relative;

	p {
		margin-bottom: 10px;

		:last-of-type {
			margin-bottom: 0;
		}
	}
}

.speech-bubble-ds__arrow {
	border-left: 21px solid transparent;
	border-top: 20px solid rgba(0, 0, 0, 0.2);
	bottom: -25px;
	position: absolute;
	right: 200px;

	&::before {
		border-left: 23px solid transparent;
		border-top: 23px solid #a7a7a7;
		bottom: 2px;
		content: '';
		position: absolute;
		right: 5px;
	}
	&::after {
		border-left: 21px solid transparent;
		border-top: 21px solid #efefef;
		bottom: 4px;
		content: '';
		position: absolute;
		right: 6px;
	}
}
</style>

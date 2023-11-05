<template>
	<div style="position: relative">
		<b-navbar toggleable="sm" type="light" class="navbar-mini">
			<b-container>
				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="bold-links">
						<b-nav-item :to="localePath('/', this.$i18n.locale)">
							{{ $t('site.home') }}</b-nav-item
						>

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
					</b-navbar-nav>

					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<!-- <b-nav-item v-if="isAuthenticated" class="dp" to="/profile">
              <b-icon icon="people"></b-icon>
              {{ loggedInUser.username }}</b-nav-item
            > -->

						<b-nav-item-dropdown right class="dp" v-if="isAuthenticated">
							<template #button-content>
								<b-icon icon="people" class="mr-1"></b-icon
								><span class="">{{ loggedInUser.username }}</span>
							</template>
							<b-dropdown-item to="/profile">Профиль</b-dropdown-item>
							<b-dropdown-item @click="logout">Выйти</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item
							v-else
							class="dp"
							:to="localePath('/login', this.$i18n.locale)"
						>
							Login/Register
						</b-nav-item>

						<b-nav-item-dropdown right class="dp">
							<template #button-content>
								<b-img
									class="mr-1"
									v-bind="mainProps"
									rounded
									:src="`/pic/${currentLocale[0].long_iso}.svg`"
								/><span class="">{{ currentLocale[0].name }}</span>
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
				</b-collapse>
			</b-container>
		</b-navbar>
		<div>
			<!-- Image and text -->
			<b-navbar toggleable="sm" type="dark" class="navbar-custom">
				<b-container>
					<b-navbar-brand
						:to="localePath('store', this.$i18n.locale)"
						class="upper"
						>{{ getSiteConfig['title'] }}</b-navbar-brand
					>

					<b-nav-text>{{ $t('header.search') }}</b-nav-text>

					<b-navbar-nav class="ml-auto">
						<!-- <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
					</b-navbar-nav>
					{{ cart }}
					<b-button variant="info" class="mr-3" size="sm">
						<b-icon icon="cart4"></b-icon>
						$0.00
						<b-badge variant="light" v-if="countCart">{{ countCart }}</b-badge>
					</b-button>
					<b-dropdown right text="Menu" size="sm">
						<b-dropdown-item>Item 1</b-dropdown-item>
						<b-dropdown-item>Item 2</b-dropdown-item>
						<b-dropdown-divider></b-dropdown-divider>
						<b-dropdown-item>Item 3</b-dropdown-item>
					</b-dropdown>
				</b-container>
			</b-navbar>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	data() {
		return {
			mainProps: {
				width: 20,
				height: 15,
			},
			mProps: {
				width: 26,
				height: 14,
			},
		};
	},
	computed: {
		...mapGetters(['isAuthenticated', 'loggedInUser', 'getSiteConfig']),
		...mapGetters('cart', ['countCart']),
		...mapState('cart', ['cart']),
		availableLocales() {
			return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
		},
		currentLocale() {
			return this.$i18n.locales.filter((i) => i.code == this.$i18n.locale);
		},
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			const mainNavbar = document.querySelector('.navbar-custom');

			if (window.scrollY > 0) {
				mainNavbar.classList.add('fixed-top'); // Добавляем класс для фиксации
			} else {
				mainNavbar.classList.remove('fixed-top'); // Убираем класс при возвращении в начальное положение
			}
		},

		changeLanguage(lang) {
			this.$i18n.setLocale(lang);
		},
		async logout() {
			await this.$auth.logout();
			this.$bvToast.show('my-toast');
			this.$noty.show({
				title: '!',
				content: 'Вы вышли из системы',
				variant: 'primary',
			});
		},
	},
};
</script>
<style>
.upper {
	text-transform: uppercase;
}

.navbar-mini {
	background-color: #10ac84;
	padding: 1px;
}

.navbar-custom {
	padding: 10px;
	background-color: #1e272e;
	border-bottom: 1px solid #bdc3c7;
}

.bold-links a {
	font-weight: bold;
}

.dp {
	font-size: 14px;
	font-weight: bold;
}
</style>

<template>
	<div class="navbar--container">
		<vue-navigation-bar
			:options="navbarOptions"
			class="navbar"
			@vnb-item-clicked="changeLocale"
		/>
	</div>
</template>



<script>
export default {
	methods: {
		changeLocale(text) {
			if (text == 'English' || text == 'Español') {
				this.$i18n.locale = this.$i18n.locale == 'es' ? 'en-us' : 'es';
				this.$router.push({
					path: this.$tp(this.$route.path, this.currentLocale, true),
				});
			}
		},
	},
	computed: {
		altLocale() {
			return this.$i18n.locale == 'es' ? 'English' : 'Español';
		},
		navbarOptions() {
			return {
				elementId: 'main-navbar',
				isUsingVueRouter: true,
				mobileBreakpoint: 992,
				brandImagePath: './',
				brandImage: require('@/assets/images/logo.webp'),
				brandImageAltText: 'logo',
				// collapseButtonImageOpen: require('@/assets/images/menu.svg'),
				collapseButtonOpenColor: 'var(--color-p)',
				collapseButtonCloseColor: 'var(--color-p)',
				showBrandImageInMobilePopup: true,
				ariaLabelMainNav: 'Main Navigation',
				tooltipAnimationType: 'shift-away',
				tooltipPlacement: 'bottom',
				menuOptionsLeft: [],
				menuOptionsRight: [
					{
						type: 'link',
						text: this.$t('nav.home'),
						path: this.$tp('/'),
						// iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
					},
					{
						type: 'link',
						text: this.$t('nav.pa'),
						arrowColor: 'var(--color-p)',
						subMenuOptions: [
							{
								type: 'link',
								text: this.$t('nav.employees'),
								path: this.$tp('/employee'),
								// iconLeft: '<i class="fa fa-star fa-fw"></i>',
							},
							{
								type: 'hr',
							},
							{
								type: 'link',
								text: this.$t('nav.employers'),
								path: this.$tp('/employer'),
								// arrowColor: '#659CC8',
							},
							{
								type: 'hr',
							},
							{
								type: 'link',
								text: this.$t('nav.ba'),
								path: this.$tp('/business-litigation'),
							},
						],
					},

					{
						type: 'link',
						text: this.$t('nav.wwa'),
						path: this.$tp('/attorney-search'),
						// iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
					},
					{
						type: 'link',
						text: this.$t('nav.ca'),
						path: this.$tp('/contact-us'),
						// iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
					},
					{
						type: 'link',
						text: this.altLocale,
						path: '',
						isLinkAction: true,
						// iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
					},
				],
			};
		},
	},
	// data() {
	// 	return {
	// 		navbarOptions:
	// 	};
	// },
};
</script>


<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'
.navbar--container
   background-color: var(--color-b-alt)
   .navbar
      max-width: var(--layout-max-width)
      margin: auto
   ::v-deep
      .vnb__brand-image-wrapper__link
         display: flex
         padding-top: var(--space-xs)
         padding-bottom: var(--space-xs)
         padding-left: var(--space-sm)
         align-items: center
         justify-content: space-between
         &__image
            align-items: center
            max-height: 40px
            @include md
               max-height: 50px
      .vnb__menu-options__option__link
         font-size: var(--d-lg)
         font-weight: 400
         color: var(--color-t-h-alt)
         font-family: var(--font-secondary)
      .vnb__menu-options__option:not(:last-child)
         margin-right: var(--space-sm)
      .vnb__sub-menu-options__option__link:hover
         border-left: solid 2px var(--color-p)
      .vnb__sub-menu-options__option__hr
         margin: 0
      .vnb__sub-menu-options
         padding: 0
</style>
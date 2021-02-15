<template>
	<div class="navbar--container">
		<vue-navigation-bar :options="navbarOptions" class="navbar" />
	</div>
</template>



<script>
export default {
	data() {
		return {
			navbarOptions: {
				elementId: 'main-navbar',
				isUsingVueRouter: true,
				mobileBreakpoint: 992,
				brandImagePath: './',
				brandImage: require('@/assets/images/logo.png'),
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
						text: 'Home',
						path: { name: '/' },
						// iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
					},
					{
						type: 'link',
						text: 'Practice Areas',
						arrowColor: 'var(--color-p)',
						subMenuOptions: [
							{
								type: 'link',
								text: 'Employee Services',
								// subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
								path: '/employee',
								// iconLeft: '<i class="fa fa-star fa-fw"></i>',
							},
							{
								type: 'hr',
							},
							{
								type: 'link',
								text: 'Employer Services',
								// subText: "You're a presentation tool!",
								path: '/employer',
								// arrowColor: '#659CC8',
							},
							{
								type: 'hr',
							},
							{
								type: 'link',
								text: 'Business Litigation',
								// subText:
								// 	'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
								path: '/business-litigation',
							},
						],
					},

					{
						type: 'link',
						text: 'Who We Are',
						path: '/who-we-are',
						// iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
					},
					{
						type: 'link',
						text: 'Contact Us',
						path: '/contact-us',
						// iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
					},
				],
			},
		};
	},
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
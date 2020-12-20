<template>
	<div class="header-container">
		<header class="header">
			<div>
				<g-link to="/">
					<img src="@/assets/images/logo.png" alt="logo" class="logo" />
				</g-link>
				<!-- <img src="" alt="Lee Law Offices" /> -->
			</div>
			<nav class="main-nav">
				<i class="nav-icon" @click="toggleNav">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="36"
						viewBox="0 0 24 24"
						fill="none"
						stroke="var(--color-t)"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-menu"
					>
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<line x1="3" y1="18" x2="21" y2="18"></line>
					</svg>
				</i>

				<ul v-if="displayNav" class="sm-nav">
					<li><g-link to="/">Home</g-link></li>
					<!-- <li><g-link>About</g-link></li> -->
					<li><g-link to="/practice-areas">Practice Areas</g-link></li>
					<li><g-link to="/contact-us">Contact Us</g-link></li>
					<!-- <li><g-link  to="/">En Espanol</g-link></li> -->
				</ul>
				<ul class="md-nav">
					<li><g-link to="/">Home</g-link></li>
					<li><g-link to="/about">About</g-link></li>
					<li><g-link to="/practice-areas">Practice Areas</g-link></li>
					<li><g-link to="/contact-us">Contact Us</g-link></li>
					<!-- <li><g-link  to="/">En Espanol</g-link></li> -->
				</ul>
			</nav>
		</header>
	</div>
</template>
<script>
export default {
	data() {
		return {
			displayNav: false,
		};
	},
	methods: {
		toggleNav() {
			this.displayNav = !this.displayNav;
		},
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

ul
    margin-bottom: 0

.header-container
    background-color: var(--color-b-alt)
    padding: var(--space-md) var(--space-sm) var(--space-sm)
    // border-bottom: 8px solid var(--color-p)

.header
    display: flex
    flex-direction: column
    max-width: var(--layout-max-width)
    margin: auto
    justify-content: space-between
    align-items: center

    @include md
        // margin-top: var(--space-sm)

    @include lg
        flex-direction: row
        padding-top: var(--space-xs)
        padding-bottom: var(--space-2xs)

    a
        font-size: var(--d-lg)
        font-weight: 400

    .logo
        display: grid
        place-items: center
        padding: 0 var(--space-xs)
        max-width: 350px
        margin-bottom: var(--space-md)

        @include lg
            margin-bottom: 0

    .main-nav
        display: grid
        place-items: center

        .sm-nav
            list-style-type: none
            width: 100%

            li
                padding-left: var(--space-sm)
                padding-top: var(--space-2xs)
                padding-bottom: var(--space-2xs)

        .md-nav
            display: none
            list-style-type: none

        @include md
            .nav-icon
                display: none

            .md-nav
                display: flex

            li
                a
                    padding: var(--space-2xs) var(--space-sm)
                    &:hover
                        text-decoration: none
                        background-color: var(--color-p)
                &:last-child
</style>

<template>
	<div class="header-container">
		<header class="header">
			<div class="logo--container">
				<div class="logo">
					<g-link to="/">
						<img src="@/assets/images/logo.png" alt="logo" class="logo" />
					</g-link>
				</div>
				<!-- <img src="" alt="Lee Law Offices" /> -->
				<div class="icon">
					<i class="nav-icon" @click="toggleNav">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
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
				</div>
			</div>
			<nav class="main-nav" v-show="displayNav">
				<ul class="lg-nav">
					<li><g-link to="/">Home</g-link></li>
					<li><g-link to="/who-we-are">Who We Are</g-link></li>
					<li><g-link to="/employer">Employers</g-link></li>
					<li><g-link to="/employee">Employees</g-link></li>
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

//layout
.header
    margin-left: auto
    margin-right: auto

    @include lg
        display: flex
        justify-content: space-between
        max-width: var(--layout-max-width)
        padding: var(--space-xs) 0

    ul
        margin: 0

.main-nav
    @include lg
        margin-top: var(--space-sm)

    ul
        @include lg
            display: flex

    li
        padding-left: var(--space-md)
        padding-top: var(--space-2xs)
        padding-bottom: var(--space-2xs)
        white-space: nowrap

        @include lg
            padding-right: var(--space-xs)
            padding-left: var(--space-xs)

.logo--container
    display: flex
    padding: var(--space-sm)
    align-items: center
    justify-content: space-between

    .logo
        width: 80%
        display: flex
        align-items: center
        max-width: 350px

//remove icon on lg screens
//show menu on lg screens
@include lg
    .icon
        display: none

    .main-nav
        display: block !important

// DISPLAY STYLES
.header-container
    background-color: var(--color-b-alt)

.main-nav
    ul
        list-style: none
        border-bottom: 1px solid rgba(0, 0, 0, .1)

        @include lg
            border: none

    li
        border-top: 1px solid rgba(0, 0, 0, .1)

        @include lg
            border-top: 1px solid rgba(0, 0, 0, 0)
            border-bottom: 1px solid rgba(0, 0, 0, 0)

        &:hover
            border-top: 1px solid rgba(0, 0, 0, .1)
            border-bottom: 1px solid rgba(0, 0, 0, .1)

    a
        font-size: var(--d-lg)
        font-weight: 400
        color: var(--color-t-h)
        font-family: var(--font-secondary)

        &:hover
            text-decoration: none

.icon
    height: 30px

    &:hover
        cursor: pointer
</style>

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
				<navbar-menu />
			</nav>
		</header>
	</div>
</template>
<script>
import NavbarMenu from './Navbar-Menu.vue';
export default {
	components: { NavbarMenu },
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

.icon
    height: 30px

    &:hover
        cursor: pointer
</style>

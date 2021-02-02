<template>
	<div class="header-container">
		<header class="header">
			<div class="logo-container">
				<g-link to="/">
					<!-- <h1>Lee Law Offices</h1> -->
					<img src="@/assets/images/logo.png" alt="logo" class="logo" />
				</g-link>
				<!-- <img src="" alt="Lee Law Offices" /> -->
			</div>
			<nav class="main-nav">
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
				<ul class="lg-nav">
					<li><g-link to="/">Home</g-link></li>
					<li><g-link to="/about">About</g-link></li>
					<li><g-link to="/practice-areas">Practice Areas</g-link></li>
					<li><g-link to="/contact-us">Contact Us</g-link></li>
					<!-- <li><g-link  to="/">En Espanol</g-link></li> -->
				</ul>
			</nav>
			<ul v-if="displayNav" class="sm-nav">
				<li><g-link to="/">Home</g-link></li>
				<li><g-link>About</g-link></li>
				<li><g-link to="/practice-areas">Practice Areas</g-link></li>
				<li><g-link to="/contact-us">Contact Us</g-link></li>
				<!-- <li><g-link  to="/">En Espanol</g-link></li> -->
			</ul>
		</header>
	</div>
</template>
<script>
export default {
	data() {
		return {
			displayNav: true,
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
</style>

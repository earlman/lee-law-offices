<template>
	<div class="header-container">
		<header class="header">
			<div class="logo">
				<h1>Lee Law Offices</h1>
				<!-- <img src="" alt="Lee Law Offices" /> -->
			</div>
			<nav class="main-nav">
				<ul>
					<li><g-link to="/">Home</g-link></li>
					<!-- <li><g-link>About</g-link></li> -->
					<li><g-link  to="/practice-areas">Practice Areas</g-link></li>
					<li><g-link  to="/contact-us">Contact Us</g-link></li>
					<!-- <li><g-link  to="/">En Espanol</g-link></li> -->
				</ul>
			</nav>
		</header>
	</div>
</template>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.header-container
    background-color: var(--color-b-alt)
    padding: var(--space-lg) 0 var(--space-sm)
    border-bottom: 12px solid var(--color-p)

.header
    display: grid
    max-width: var(--layout-max-width)
    margin: auto

    *
        color: var(--color-t-alt)

    a
        font-size: var(--d-lg)
        font-weight: 400

    .logo
        display: grid
        place-items: center
        margin-top:

    @include md

        .main-nav
            display: grid
            place-items: center

            ul
                display: flex
                list-style-type: none

            li

                a
                    padding: var(--space-2xs) var(--space-sm)


                    &:hover
                        text-decoration: none
                        background-color: var(--color-p)

                &:last-child
</style>

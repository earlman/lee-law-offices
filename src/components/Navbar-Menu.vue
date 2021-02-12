<template>
	<div class="navbar-menu">
		<ul>
			<li><g-link to="/">Home</g-link></li>
			<li><g-link to="/who-we-are">Who We Are</g-link></li>
			<li>
				<!-- First Tier Drop Down -->
				<!-- <label for="drop-1" class="toggle">Practice Areas +</label> -->
				<g-link to="/employer">Practice Areas</g-link>
				<!-- <a href="#">WordPress</a> -->
				<!-- <input type="checkbox" id="drop-1" /> -->
				<!-- <ul>
					<li><a href="#">Themes and stuff</a></li>
					<li><a href="#">Plugins</a></li>
					<li><a href="#">Tutorials</a></li>
				</ul> -->
			</li>

			<!-- <li><g-link to="/employee">Employees</g-link></li> -->
			<li><g-link to="/contact-us">Contact Us</g-link></li>
			<!-- <li><g-link  to="/">En Espanol</g-link></li> -->
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.navbar-menu
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

    a, label
        text-transform: none
        font-size: var(--d-lg)
        font-weight: 400
        color: var(--color-t-h)
        font-family: var(--font-secondary)

        &:hover
            text-decoration: none

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
</style>
<template>
	<div class="layout">
		<Navbar />
		<div class="hero">
			<div class="pagetitle--container">
				<div class="pagetitle">
					<h1>{{ title }}</h1>
				</div>
			</div>
		</div>
		<main class="main">
			<div class="sidebar" v-if="$slots.sidebar">
				<slot name="sidebar"></slot>
			</div>
			<div class="mainbar">
				<slot />
			</div>
		</main>
		<Footer />
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default {
	props: { title: '', pageSubtitle: '', color: '' },
	components: {
		Navbar,
		Footer,
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

main
    background-color: var(--color-b)
    position: relative

.hero
    background-image: url(~@/assets/images/practiceareas.png)
    min-height: 150px
    background-position: center
    background-size: cover
    position: relative
    margin-bottom: var(--space-lg)
    padding: var(--space-xs)

    .pagetitle--container
        width: 100%
        position: relative
        bottom: -6rem

    .pagetitle
        background-color: var(--color-b-alt)
        margin-bottom: var(--space-xs)
        padding: var(--space-xs)
        z-index: 10
        position: absolute
        width: 100%

        @include md
            padding-left: var(--space-md)

.sidebar
    background-color: var(--color-b-alt)
    margin: var(--space-xs)
    padding: var(--space-2xs) var(--space-xs)
    height: min-content

    ul
        margin: var(--space-sm) 0

    li
        padding: var(--space-2xs) var(--space-md)
        list-style-type: none

        a
            font-weight: 400
            font-size: var(--d-md)
            color: var(--color-t-c)

@include md
    .mainbar
        margin-left: var(--space-xs)
        margin-right: var(--space-xs)

    .sidebar
        padding: var(--space-sm)

@include lg

    .main
        display: grid
        grid-template-columns: 3fr 1fr
        max-width: var(--layout-max-width)
        margin: auto

        .sidebar
            grid-column: 2
            margin: 0
            min-height: 500px

        .mainbar
            grid-column: 1
            grid-row: 1

    .hero
        height: 250px
        grid-column: 1 / -1
        display: grid
        grid-template-columns: 1fr 1200px 1fr
        overflow: visible
        margin-bottom: var(--space-md)

        .pagetitle--container
            grid-column: 2
            display: grid
            place-items: end
        .pagetitle
            width: 50%
            // margin-right: var(--space-xs)

            bottom: 2rem
            padding: var(--space-xs) var(--space-sm)
</style>

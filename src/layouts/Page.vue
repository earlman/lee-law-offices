<template>
	<div class="layout">
		<Navbar />
		<div class="hero" :style="{ 'background-image': 'url(' + bgImage + ')' }">
			<div class="pagetitle--container">
				<div class="pagetitle">
					<h1>{{ title }}</h1>
				</div>
			</div>
		</div>
		<main class="main" :class="{ nogrid: noSidebar }">
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
	data() {
		return {};
	},
	props: {
		title: '',
		pageSubtitle: '',
		color: '',
		bgImage: '',
		noSidebar: false,
	},
	components: {
		Navbar,
		Footer,
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.layout
    background-color: #edece9
    background-image: url(~@/assets/images/background-tile.png)

main
    position: relative

.hero
    // background-image: url(~@/assets/images/practiceareas.png)
    min-height: 180px
    background-position: center 40%
    background-repeat: no-repeat
    background-size: cover
    position: relative
    padding: var(--space-xs)
    width: 100%
    margin-bottom: var(--space-md)

    @include md
        min-height: 270px

    @include lg
        background-size: cover
        padding: 0

    .pagetitle--container
        width: 100%
        position: relative
        bottom: -7.5rem
        height: min-content

        @include md
            bottom: -11rem

        @include lg
            bottom: -12rem
            display: grid
            grid-template-columns: 1fr 1fr
            max-width: 1200px
            margin: auto
            padding: 0 var(--space-md)

        @include xl
            padding: 0

    .pagetitle
        grid-column: 2
        background-color: var(--color-b-alt)
        margin-bottom: var(--space-xs)
        padding: var(--space-xs) var(--space-sm)
        z-index: 10
        position: absolute
        width: 100%
        max-height: 100px // somehow fixes mobile title

        h1
            font-size: var(--d-2xl)

        @include md
            // margin-right: var(--space-md)
            padding: 1.2rem var(--space-md)

        @include lg
            position: static

.mainbar
    margin: 0 var(--space-xs)

    @include lg
        margin: 0

.sidebar
    background-color: var(--color-b-alt)
    margin: var(--space-xs)
    padding: var(--space-2xs) var(--space-xs)
    height: min-content

    @include md
        padding: var(--space-sm)

    ul
        margin: var(--space-sm) 0

        @include md
            margin: 0

    li
        padding: var(--space-2xs) var(--space-xs)
        list-style-type: none

        a
            font-weight: 400
            font-size: var(--d-md)
            color: var(--color-t-c)

.nogrid // fill whole width with mainbar
    display: block !important

.main
    margin-bottom: var(--space-lg)

    @include lg
        grid-gap: var(--space-sm)
        display: grid
        grid-template-columns: 3fr 1fr
        max-width: var(--layout-max-width)
        margin-left: var(--space-md)
        margin-right: var(--space-md)

        .sidebar
            grid-column: 2
            margin: 0
            min-height: min-content

        .mainbar
            grid-column: 1
            grid-row: 1

    @include xl
        margin-right: auto
        margin-left: auto
</style>

<template>
	<div class="layout">
		<Navbar />
		<div class="header">
			<g-image class="header--image" fit="contain" src="@/assets/images/practiceareas.png" />
			<div class="pagetitle">
				<h1>{{ title }}</h1>
			</div>
		</div>
		<main>
			<slot />
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

<style lang="sass">
main
    background-color: var(--color-b)

.header
    z-index: 999

.pagetitle
    background-color: var(--color-b-alt-2)
    margin-top: calc(-1 * var(--space-md))
    margin-left: var(--space-xs)
    margin-right: var(--space-xs)
    margin-bottom: var(--space-xs)
    padding: var(--space-xs)
    border-radius: 3px

.header--image
    height: 100px
    width: auto
    position: relative
    z-index: -1
</style>

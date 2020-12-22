<template>
	<Layout title="About">
		<div class="disclaimer--container">
			<h1 class="title">About</h1>
			<div class="disclaimer">
				<p>This page is under construction</p>
				<!-- <div v-html="$page.pageContent.content"></div> -->
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	components: {},
};
</script>

<page-query>
query {
    pageContent(id: "Disclaimer"){
        content
    }
}
</page-query>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.disclaimer--container
    margin: auto
    @include xl
        width: 1200px

.title
    background-color: var(--color-b-alt)
    padding: var(--space-xs)
    margin: var(--space-xs) var(--space-xs)
    max-width: min-content

    @include md
        margin: var(--space-sm)
        padding: var(--space-sm)

.disclaimer
    background-color: var(--color-b-alt)
    padding: var(--space-xs)
    margin: 0 var(--space-xs)

    @include md
        margin: var(--space-sm)
        padding: var(--space-sm)

    @include lg
        width: max-content

    ::v-deep h2
        margin-top: var(--space-sm)
        margin-bottom: var(--space-xs)
</style>
<template>
	<Layout title="Disclaimer">
		<div class="disclaimer--container">
			<div class="disclaimer">
				<div v-html="$page.pageContent.content"></div>
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
    padding-top: var(--space-sm)

.disclaimer
    background-color: var(--color-b-alt)
    padding: var(--space-xs)
    margin: var(--space-xs)

    @include md
        margin: var(--space-sm)
        padding: var(--space-sm)

    ::v-deep h2
        margin-top: var(--space-sm)
        margin-bottom: var(--space-xs)
</style>
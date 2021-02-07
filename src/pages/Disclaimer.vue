<template>
	<Layout title="Disclaimer">
		<div class="disclaimer--container">
			<h1 class="title">Disclaimer</h1>
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
    margin-top: var(--space-sm)
    margin-left: auto
    margin-right: auto
    @include xl
        display: grid
        grid-template-columns: 1fr 3fr
        width: 1200px
        grid-gap: var(--space-sm)

.title
    background-color: var(--color-b-alt)
    padding: var(--space-xs)
    margin: var(--space-xs) var(--space-xs)
    height: min-content

    @include md
        margin: var(--space-sm)
        padding: var(--space-sm)

    @include lg
        padding-left: var(--space-md)
        padding-right: var(--space-md)

    @include xl
        width: min-content
        text-align: right
        margin-right: 0
        justify-self: end

.disclaimer
    background-color: var(--color-b-alt)
    padding: var(--space-xs)
    margin: 0 var(--space-xs)

    @include md
        margin: var(--space-sm)
        padding: var(--space-sm)

    @include lg
        width: max-content
        padding: var(--space-md)

    @include xl
        margin-left: 0
        margin-right: 0

    ::v-deep h2
        margin-top: var(--space-sm)
        margin-bottom: var(--space-xs)
</style>
<template>
	<div>
		<div class="disclaimer--container">
			<div class="disclaimer">
				<h4>This page is under construction.</h4>
			</div>
		</div>
	</div>
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
    width: 100%
    @include md
        padding: var(--space-sm)
</style>
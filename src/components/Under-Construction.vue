<template>
	<div>
		<div class="disclaimer--container">
			<div class="disclaimer">
				<h3>This page is under construction.</h3>
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

.disclaimer
    min-height: 20vh
    background-color: var(--color-b-alt)
    padding: var(--space-xs)
    width: 100%
    display: grid
    place-items: center
    @include md
        padding: var(--space-sm)
</style>
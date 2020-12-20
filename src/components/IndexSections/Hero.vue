<template>
	<div class="hero-container">
		<div class="hero">
			<div class="content">
				<h1 class="hero--title">
					The law is on your side<br />
					No legal fees until we win
				</h1>
				<p class="hero--text">
					Call us today for a free consultation <br />
					Se habla español &nbsp; <em>(323) 289-2260</em>&nbsp;
				</p>
				<button class="contact-us">Contact Us</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.hero-container
    background-image: url(~@/assets/images/hero.png)
    background-position: 50% 0
    height: 70vh
    background-repeat: no-repeat
    background-size: cover
    padding: var(--space-lg) var(--space-sm)
    display: flex
    flex-direction: column

    @include lg
        height: unset
        margin: auto
        max-width: var(--layout-max-width)
        background-position: 100% 0
        background-size: 80% auto

    .hero
        margin: auto
        width: 100%
        max-width: var(--layout-max-width)

        &--title
            color: var(--color-t-h)
            font-weight: 400
            line-height: 1.6
            font-size: var(--d-2xl)
            margin-bottom: var(--space-xs)

        &--text, em
            // font-size: var(--d-lg)
            color: var(--color-t-c)

        .content
            border-radius: 3px
            padding: var(--space-sm)
            background-color: var(--color-b-alt)
            margin: auto
            width: max-content

            @include md
                padding: var(--space-sm)

            @include lg
                padding: var(--space-md)
                margin: 0

button.contact-us
    width: max-content
</style>
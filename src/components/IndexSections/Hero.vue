<template>
	<div class="hero-container">
		<div class="hero">
			<div class="content">
				<h1 class="hero--title">
					The law is on your side<br />
					No legal fees until we win
				</h1>
				<div class="hero--text">
					<p class="hero--text">
						Call us today for a free case evaluation<br />(323) 289-2260<br /><em
							>Se habla Español</em
						>
					</p>
					<p></p>
				</div>
				<g-link to="/contact-us">
					<button class="contact-us">Contact Us</button>
				</g-link>
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
    background-position: 30% -130px
    min-height: 500px
    background-repeat: no-repeat
    background-size: auto 130%
    padding: 200px var(--space-md) var(--space-sm) var(--space-xs)
    display: flex
    flex-direction: column

    @include md
        padding: var(--space-lg) var(--space-md)
        margin: auto
        max-width: var(--layout-max-width)
        background-position: 100% 0%
        background-size: 75% auto
        overflow: hidden
        width: 120vw //lol

    @include lg
        padding: var(--space-lg) var(--space-sm) var(--space-xl)
        margin: auto

    .hero
        // margin: auto
        width: 100%
        max-width: var(--layout-max-width)

        &--title
            color: var(--color-t-h)
            font-weight: 400
            line-height: 1.6
            font-size: 20px
            margin-bottom: var(--space-xs)
            font-family: var(--font-secondary)

            @include md
                font-size: var(--d-xl)

            @include lg
                font-size: var(--d-2xl)

        &--text

            p, em
                color: var(--color-t-c)
                margin-bottom: var(--space-2xs)

        .content
            padding: var(--space-sm)
            background-color: var(--color-b-alt)
            // margin: auto
            max-width: max-content

            @include md
                padding: var(--space-sm)

            @include lg
                padding: var(--space-md)
                margin: 0

button.contact-us
    width: max-content
</style>
<template>
	<div class="hero-container">
		<div class="hero">
			<div class="content">
				<h1 class="hero--title">
					The law is on your side.<br />
					We are here to protect you.
				</h1>
				<p class="hero--text">
					Call us today for a free consultation! <br />
					630-444-5656. Se habla español.
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
    height: min-content
    background-repeat: no-repeat
    background-size: auto 100%
    padding: var(--space-sm)
    display: flex
    flex-direction: column

    @include landscape
        background-size: 100% auto

    .hero
        margin: auto

        .content
            border-radius: 3px
            padding: var(--space-sm)
            background-color: var(--color-b-alt-2)

            h1, p
                margin-bottom: var(--space-sm)
            button
                margin: auto

// .content
//     margin: auto
//     background-color: var(--color-b-alt-2)
//     padding: var(--space-sm)
//     // opacity: .6

//     @include md
//         padding: var(--space-md)
//         min-width: 300px
//         max-width: 800px
//         grid-row: 2

button.contact-us
    width: max-content
</style>
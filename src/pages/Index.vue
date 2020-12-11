<template>
	<Layout pageTitle="Home" pageSubtitle="">
		<section class="hero-container">
			<div class="hero">
				<div class="content">
					<h1>The law is on your side. We are here to protect you.</h1>
					<p>Call us today for a free consultation! 630-444-5656. Se habla español.</p>
					<button class="contact-us">Contact Us</button>
				</div>
			</div>
		</section>

		<section class="practice-areas">
			<practice-areas-grid />
		</section>
		<section class="free-consultation">
			<h2>Free Consultation</h2>
			<form action="">
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="phone" placeholder="Phone" />
				<input type="text" name="email" placeholder="Name" />
				<textarea
					name="message"
					id=""
					cols="30"
					rows="10"
					placeholder="Briefly Explain your situation."
				></textarea>
				<button type="submit" class="contact-us">Contact Us</button>
			</form>
		</section>
		<section class="contact-us">
			<h2>Contact Us</h2>
		</section>
	</Layout>
</template>


<script>
import PracticeAreasGrid from '../components/PracticeAreasGrid.vue';
export default {
	components: { PracticeAreasGrid },
	metaInfo: {
		title: 'Home',
	},
	data() {
		return {};
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

section
    margin-bottom: var(--space-lg)

@include md
    .hero-container
        background-image: url(~@/assets/images/hero.png)
        background-position: 100% 100%
        min-height: 70vh
        background-repeat: no-repeat
        background-size: auto 100%

.hero
    display: grid
    grid-template-rows: 1fr 3fr 1fr
    max-width: var(--layout-max-width)

.content
    margin: auto
    background-color: var(--color-b)
    padding: var(--space-sm)
    // opacity: .6

    @include md
        padding: var(--space-md)
        min-width: 300px
        max-width: 800px
        grid-row: 2

button.contact-us
    width: max-content

.free-consultation
    max-width: var(--layout-max-width)
    margin: 0 auto var(--space-lg)

.practice-areas
    max-width: var(--layout-max-width)
    margin: 0 auto var(--space-lg)

//this is the section lol
.contact-us
    max-width: var(--layout-max-width)
    margin: 0 auto var(--space-lg)
form
    display: grid
    max-width: 600px
</style>

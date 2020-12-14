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

		<practice-areas-grid />
		<section class="practice-areas"></section>
		<free-consultation />
		<section class="free-consultation"></section>
		<contact-us />
		<section class="contact-us"></section>
	</Layout>
</template>


<script>
import PracticeAreasGrid from '../components/IndexSections/PracticeAreasGrid.vue';
import FreeConsultation from '../components/IndexSections/FreeConsultation.vue';
import ContactUs from '../components/IndexSections/ContactUs.vue';
export default {
	components: { PracticeAreasGrid, FreeConsultation, ContactUs },
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
    background-color: var(--color-b-alt-2)
    padding: var(--space-sm)
    // opacity: .6

    @include md
        padding: var(--space-md)
        min-width: 300px
        max-width: 800px
        grid-row: 2

button.contact-us
    width: max-content
</style>

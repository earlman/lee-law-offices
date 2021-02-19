<template>
	<Layout pageTitle="Employer Home" pageSubtitle="" class="employee-page">
		<section class="h">
			<hero :bgImage="bgImage">
				<div class="content">
					<h1 class="hero--title">We're here to protect you<br />and your business</h1>
					<div class="hero--text">
						<p class="hero--text">Call us today for a free case evaluation</p>

						<p>(323) 289-2260<br /><em>Se habla Español</em></p>
					</div>
					<g-link to="/contact-us"> </g-link>
				</div>
			</hero>
		</section>
		<section>
			<div class="employer--content responsive-container">
				<div class="inner">
					<div v-html="$page.pageContent.content"></div>
					<!-- <button class="contact-us">Contact Us</button> -->
				</div>
			</div>
			<div class="cta responsive-container">
				<h4>
					You've come to the right place. We will help you build a strong defense and
					offense against these claims.
				</h4>
				<h4>Contact us for a free consultation and speak to a member of our legal team.</h4>
			</div>
		</section>
		<section>
			<free-consultation sectionTitle="Free Case Evaluation Form" />
		</section>
	</Layout>
</template>

<page-query>
query {
    pageContent(id: "employer"){
        content
    }
}
</page-query>

<script>
import PracticeAreasGrid from '../components/IndexSections/PracticeAreasGrid.vue';
import FreeConsultation from '../components/IndexSections/FreeConsultation.vue';
import ContactUs from '../components/IndexSections/ContactUs.vue';
import Hero from '../components/IndexSections/Hero.vue';
import img from '@/assets/images/discrimination.png';

export default {
	components: { PracticeAreasGrid, FreeConsultation, ContactUs, Hero },
	metaInfo: {
		title: 'Home',
	},
	data() {
		return {
			bgImage: img,
		};
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

section
    overflow: hidden
    margin-bottom: var(--space-lg)

.employer--content
    background-color: var(--color-b-alt)

    @include md
        padding: var(--space-lg) var(--space-lg)

    @include xl
        padding: var(--space-lg) var(--space-xl)
        max-width: max-content
        margin-left: auto
        margin-right: auto

    .inner
        margin: auto
        max-width: 75ch
        display: grid
        place-content: center

    ::v-deep
        //fix bullet points in practice-area on mobile
        // list-style-position: outside

        h4
            max-width: 600px
            margin-left: auto
            margin-right: auto
            margin-bottom: var(--space-2xs)

        ul
            margin-left: auto
            margin-right: auto
            max-width: 600px
            display: grid
            list-style: none
            list-style-position: outisde
            list-style-image: url(~@/assets/images/bullet.svg)
            margin-top: var(--space-xs)
            margin-left: var(--space-sm)

            &:last-child
                margin-bottom: 0

            li
                color: var(--color-p)
                line-height: 2
                padding-left: var(--space-xs)

.cta
    border-top: var(--color-p) solid 1px
    border-bottom: var(--color-p) solid 1px
    background-color: rgba(247, 249, 247, .9)
    border-radius: 0

    @include xl
        padding: var(--space-lg) var(--space-xl)
        max-width: max-content
        margin-left: auto
        margin-right: auto

    h4
        font-size: var(--d-xl)
        color: var(--color-t-h)
        margin-bottom: var(--space-2xs)
        font-family: var(--font-secondary)
        font-weight: 600
        margin-left: auto
        margin-right: auto
        margin-bottom: var(--space-2xs)
        max-width: 600px

button.contact-us
    max-width: 250px
    margin: auto
</style>
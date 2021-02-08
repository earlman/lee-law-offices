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
					<g-link to="/contact-us">
						<button class="contact-us">Contact Us</button>
					</g-link>
				</div>
			</hero>
		</section>
		<section>
			<div class="employer--content responsive-container">
				<div v-html="$page.pageContent.content"></div>
			</div>
		</section>
		<section>
			<free-consultation sectionTitle="Free Case Evaluation Form" />
		</section>
		<section>
			<contact-us />
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

    ::v-deep
        //fix bullet points in practice-area on mobile
        list-style-position: inside

        @include md
            li
                margin-left: var(--space-md)
                list-style-position: outside
                width: 80%
</style>
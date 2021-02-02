<template>
	<Layout pageTitle="Home" pageSubtitle="">
		<section>
			<hero :bgImage="bgImage">
				<div class="content hero-text">
					<h1>
						We are a boutique law firm in Los Angeles specializing in Labor and
						Employment Law, and Business and Commercial Litigation.
					</h1>
					<h1>
						We carefully assess every aspect of a case to satisfy our client’s unique
						needs and to maximize our client’s results.
					</h1>
				</div>
			</hero>
		</section>
		<section><labor-law /></section>
		<section><business-lit /></section>
		<section>
			<free-consultation sectionTitle="Free Case Evaluation Form" />
		</section>
		<section>
			<contact-us />
		</section>
	</Layout>
</template>


<script>
import PracticeAreasGrid from '../components/IndexSections/PracticeAreasGrid.vue';
import FreeConsultation from '../components/IndexSections/FreeConsultation.vue';
import ContactUs from '../components/IndexSections/ContactUs.vue';
import Hero from '../components/IndexSections/Hero.vue';
import LaborLaw from '../components/IndexSections/LaborLaw.vue';
import BusinessLit from '../components/IndexSections/BusinessLit.vue';
import img from '@/assets/images/practiceareas.png';

export default {
	components: { PracticeAreasGrid, FreeConsultation, ContactUs, Hero, LaborLaw, BusinessLit },
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

.hero-text h1
    font-size: var(--d-lg)
    max-width: 40ch
    line-height: 1.6
    margin-bottom: var(--space-sm)

    &:last-child
        margin-bottom: 0
</style>

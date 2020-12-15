<template>
	<Layout pageTitle="Home" pageSubtitle="">
		<section>
			<hero />
		</section>
		<section>
			<practice-areas-grid />
		</section>
		<section>
			<free-consultation sectionTitle="Free Consultation" />
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

export default {
	components: { PracticeAreasGrid, FreeConsultation, ContactUs, Hero },
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
</style>

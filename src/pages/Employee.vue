<template>
	<Layout pageTitle="Home" pageSubtitle="" class="employee-page">
		<section class="h">
			<hero :bgImage="bgImage">
				<div class="content">
					<h1 class="hero--title" v-html="$t('employee.hero.header')"></h1>
					<div class="hero--text">
						<p class="hero--text">{{ $t('employee.hero.paragraph') }}</p>
						<p>(323) 289-2260, Ext. 1<br /><em>Se habla Español</em></p>
					</div>
					<g-link :to="$tp('/contact-us')">
						<button class="contact-us">Contact Us</button>
					</g-link>
				</div>
			</hero>
		</section>
		<section>
			<practice-areas-grid />
		</section>
		<section>
			<free-consultation :sectionTitle="$t('index.case-eval.header')" />
		</section>
	</Layout>
</template>


<script>
import PracticeAreasGrid from '../components/PracticeAreasGrid.vue';
import FreeConsultation from '../components/IndexSections/FreeConsultation.vue';
import ContactUs from '../components/IndexSections/ContactUs.vue';
import Hero from '../components/Employee-Hero.vue';
import img from '@/assets/images/employee-hero.webp';

export default {
	components: { PracticeAreasGrid, FreeConsultation, ContactUs, Hero },
	metaInfo: {
		title: 'Employee Law',
		meta: [
			{
				name: 'description',
				content:
					'The law is on your side. No legal fees until we win. Call us today for a free case evaluation.',
			},
		],
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

.employee-page
    --color-p: #39617A
    --color-button: #39617A

section
    overflow: hidden
    margin-bottom: var(--space-lg)
</style>
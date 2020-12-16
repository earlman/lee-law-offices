<template>
	<PageLayout title="Contact Us">
		<template slot="sidebar">
			<h4>Phone</h4>
			<p>660-518-6008</p>
			<h4>Address</h4>
			<p>
				2345 Avenue Street <br />
				Los Angeles, CA 61111
			</p>
		</template>
		<Gmap />

		<contact-us :title="null"> </contact-us>
	</PageLayout>
</template>

<script>
import PageLayout from '@/layouts/Page';
import ContactUs from '@/components/IndexSections/FreeConsultation';
import Gmap from '@/components/Gmap';

export default {
	metaInfo: {
		title: 'Contact Us',
	},
	components: {
		ContactUs,
		PageLayout,
		Gmap,
	},
};
</script>

<style lang="sass" scoped>
</style>
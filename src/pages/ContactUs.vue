<template>
	<PageLayout title="Contact Us">
		<template slot="sidebar">
			<p>test</p>
		</template>
		<contact-us :title="null"> </contact-us>
	</PageLayout>
</template>

<script>
import PageLayout from '@/layouts/Page';
import ContactUs from '@/components/IndexSections/FreeConsultation';

export default {
	metaInfo: {
		title: 'Contact Us',
	},
	components: {
		ContactUs,
		PageLayout,
	},
};
</script>

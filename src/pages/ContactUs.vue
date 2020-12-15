<template>
	<Layout>
		<contact-us :title="null" />
	</Layout>
</template>

<script>
import ContactUs from '@/components/IndexSections/FreeConsultation';

export default {
	metaInfo: {
		title: 'Contact Us',
	},
	components: {
		ContactUs,
	},
};
</script>

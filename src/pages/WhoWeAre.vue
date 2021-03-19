<template>
	<PageLayout title="Who We Are" :bgImage="bgImage">
		<under-construction />
	</PageLayout>
</template>

<script>
import PageLayout from '@/layouts/Page.vue';
import UnderConstruction from '@/components/Under-Construction.vue';
import img from '@/assets/images/landing-hero.png';

export default {
	data() {
		return {
			bgImage: img,
		};
	},
	components: {
		UnderConstruction,
		PageLayout,
	},
};
</script>

<style lang="sass" scoped>
</style>
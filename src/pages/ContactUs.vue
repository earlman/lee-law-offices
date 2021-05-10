<template>
	<PageLayout :title="$t('nav.ca')" :bgImage="bgImage">
		<template slot="sidebar">
			<div class="sidebar--inner">
				<div class="sidebar--item">
					<h4>{{ $t('index.contact-us.phone') }}</h4>
					<p>(323) 289-2260, Ext. 1</p>
					<h4>{{ $t('index.contact-us.fax') }}</h4>
					<p>(323) 642-5451</p>
				</div>
				<div class="sidebar--item">
					<h4>{{ $t('index.contact-us.address') }}</h4>
					<p>
						725 S. Figueroa Street <br />
						Suite 3065<br />
						Los Angeles, CA 90017
					</p>
				</div>
				<div class="sidebar--item">
					<h4>{{ $t('nav.ba') }}</h4>
					<div class="hours-table">
						<p>{{ $t('index.contact-us.wd') }}</p>
						<p>9 am - 5pm</p>
						<p>{{ $t('index.contact-us.we') }}</p>
						<p>{{ $t('index.contact-us.closed') }}</p>
						<p>{{ $t('index.contact-us.holidays') }}</p>
						<p>{{ $t('index.contact-us.closed') }}</p>
					</div>
				</div>
			</div>
		</template>
		<div class="gmap">
			<Gmap />
		</div>

		<contact-us class="contact-us" :title="null"> </contact-us>
	</PageLayout>
</template>

<script>
import PageLayout from '@/layouts/Page';
import ContactUs from '@/components/IndexSections/FreeConsultation';
import Gmap from '@/components/Gmap';
import img from '@/assets/images/contact-us.webp';

export default {
	data() {
		return {
			bgImage: img,
		};
	},
	metaInfo: {
		title: 'Contact Us',
		meta: [
			{
				name: 'description',
				content:
					'Lee Law Offices is a boutique law firm in Los Angeles specializing in Labor and Employment Law, and Business and Commercial Litigation. Call us today for a free consultation.',
			},
		],
	},
	components: {
		ContactUs,
		PageLayout,
		Gmap,
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.sidebar--inner

    h4
        text-transform: uppercase
        margin-bottom: var(--space-2xs)

    @include lg
        .sidebar--item
            margin-bottom: var(--space-sm)

.contact-us ::v-deep
    margin-left: 0
    margin-right: 0

.gmap
    margin-bottom: var(--space-sm)
    background-color: var(--color-b-alt)
    padding: var(--space-xs)
    // margin: var(--space-xs)

    @include md
        margin-left: 0
        margin-right: 0

    @include lg
        margin-top: 0

.hours-table
    display: grid
    grid-template-rows: 1fr 1fr 1fr
    grid-template-columns: 1fr 1fr
</style>
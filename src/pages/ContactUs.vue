<template>
	<PageLayout title="Contact Us">
		<template slot="sidebar">
			<div class="sidebar--inner">
				<div class="sidebar--item">
					<h4>Phone</h4>
					<p>660-518-6008</p>
				</div>
				<div class="sidebar--item">
					<h4>Address</h4>
					<p>
						2345 Avenue Street <br />
						Los Angeles, CA 61111
					</p>
				</div>
				<div class="sidebar--item">
					<h4>Business Hours</h4>
					<div class="hours-table">
						<p>Weekdays</p>
						<p>9 am - 5pm</p>
						<p>Weekends</p>
						<p>Closed</p>
						<p>Holidays</p>
						<p>Closed</p>
					</div>
				</div>
			</div>
		</template>
		<div class="gmap">
			<Gmap />
		</div>

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
@import '@/styles/04 - Layout/_media.sass'

.sidebar--inner

    h4
        text-transform: uppercase
        margin-bottom: var(--space-2xs)

    @include lg
        .sidebar--item
            margin-bottom: var(--space-sm)

.gmap
    background-color: var(--color-b-alt-2)
    padding: var(--space-xs)
    margin: var(--space-xs)

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
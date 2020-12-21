<template>
	<div class="contact-us">
		<h2 class="section-title">Contact Us</h2>
		<div class="contact-us--inner">
			<div class="gmap">
				<Gmap />
			</div>
			<div class="info">
				<div class="info-section">
					<h4>Phone</h4>
					<p>323-289-2260</p>
				</div>
				<div class="info-section">
					<h4>Fax</h4>
					<p>323-289-2261</p>
				</div>
				<div class="info-section">
					<h4>Address</h4>
					<p>
						Address: 725 S. Figueroa Street, Suite 3065 <br />
						Los Angeles, CA 90017
					</p>
				</div>
				<div class="info-section">
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
		</div>
	</div>
</template>

<script>
import Gmap from '@/components/Gmap';

export default {
	components: {
		Gmap,
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.contact-us
    @include lg
        max-width: var(--layout-max-width)
        margin: 0 auto var(--space-lg)

    .info
        // background-color: var(--color-b-alt-2)

        h4
            text-transform: uppercase
            font-size: var(--d-md)

        p
            color: var(--color-t-c)
            margin: 0

        .info-section
            margin-bottom: var(--space-sm)

    .contact-us--inner
        max-width: var(--layout-max-width)
        background-color: var(--color-b-alt-2)
        margin: var(--space-xs)
        padding: var(--space-xs)

        .gmap
            height: 50vh

        @include md
            padding: var(--space-sm)
            margin: 0

        @include lg
            display: grid
            grid-template-columns: 2fr 1fr
            grid-gap: var(--space-md)

            .gmap
                height: 500px

    .hours-table
        display: grid
        grid-template-rows: 1fr 1fr 1fr
        grid-template-columns: 1fr 1fr
</style>
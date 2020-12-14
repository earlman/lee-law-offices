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
					<p>660-518-6008</p>
				</div>
				<div class="info-section">
					<h4>Address</h4>
					<p>2345 Avenue Street <br />Los Angeles, CA 61111</p>
				</div>
				<div class="info-section">
					<h4>Business Hours</h4>
					<div class="hours-table">
						<p>Mon - Fri</p>
						<p>9 am - 6 pm</p>
						<p>Sat</p>
						<p>9 am - 1 pm</p>
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
        background-color: var(--color-b-alt-2)

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
                height: 100%

    .hours-table
        display: grid
        grid-template-rows: 1fr 1fr 1fr
        grid-template-columns: 1fr 1fr
</style>
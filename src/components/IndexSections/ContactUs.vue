<template>
	<div class="contact-us">
		<h2 class="section-title">Contact Us</h2>
		<Gmap />
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
.contact-us
    max-width: var(--layout-max-width)

    .info
        margin: var(--space-xs)
        background-color: var(--color-b-alt-2)
        padding: var(--space-xs) var(--space-xs) var(--space-lg)

        h4
            margin-bottom: var(--space-2xs)
            text-transform: uppercase

        p
            color: var(--color-t-c)

    .hours-table
        display: grid
        grid-template-rows: 1fr 1fr 1fr
        grid-template-columns: 1fr 1fr
</style>
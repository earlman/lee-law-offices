<template>
	<div class="responsive-container">
		<div class="contact-us">
			<h2 class="">{{ $t('index.contact-us.header') }}</h2>
			<div class="contact-us--inner">
				<div class="gmap">
					<Gmap />
				</div>
				<div class="info">
					<div class="info-section">
						<h4>{{ $t('index.contact-us.phone') }}</h4>
						<p>(323) 289-2260, Ext. 1</p>
					</div>
					<div class="info-section">
						<h4>{{ $t('index.contact-us.fax') }}</h4>
						<p>(323) 642-5451</p>
					</div>
					<div class="info-section">
						<h4>{{ $t('index.contact-us.address') }}</h4>
						<p>
							725 S. Figueroa Street, Suite 3065 <br />
							Los Angeles, CA 90017
						</p>
					</div>
					<div class="info-section">
						<h4>{{ $t('index.contact-us.bh') }}</h4>
						<div class="hours-table">
							<p>{{ $t('index.contact-us.wd') }}</p>
							<p>9am - 5pm (PT)</p>
							<p>{{ $t('index.contact-us.we') }}</p>
							<p>Closed</p>
							<p>{{ $t('index.contact-us.holidays') }}</p>
							<p>Closed</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import Gmap from '@/components/Gmap';
const Gmap = () => import('@/components/Gmap');

export default {
	components: {
		Gmap: () => import('@/components/Gmap'),
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.contact-us

    .info

        h4
            text-transform: uppercase
            font-size: var(--d-md)

        p
            color: var(--color-t-c)
            margin: 0

        .info-section
            margin-bottom: var(--space-sm)

    .contact-us--inner
        margin-top: var(--space-sm)

        .gmap
            height: 50vh
            margin-bottom: var(--space-sm)

        @include xl
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
<template>
	<div class="contact-us">
		<h2 class="section-title">Contact Us</h2>
		<div class="map">
			<GmapMap
				:center="{ lat: 10, lng: 10 }"
				:zoom="7"
				map-type-id="terrain"
				style="width: 500px; height: 300px"
			>
				<GmapMarker
					:key="index"
					v-for="(m, index) in markers"
					:position="m.position"
					:clickable="true"
					:draggable="true"
					@click="center = m.position"
				/>
			</GmapMap>
		</div>
		<div class="info">
			<div class="info-section">
				<h4>Phone</h4>
				<p>XXX-XXX-XXXX</p>
			</div>
			<div class="info-section">
				<h4>Address</h4>
				<p>XXX-XXX-XXXX</p>
			</div>
			<div class="info-section">
				<h4>Business Hours</h4>
				<p>XXX-XXX-XXXX</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.contact-us
    max-width: var(--layout-max-width)
    margin: 0 auto var(--space-lg)
</style>
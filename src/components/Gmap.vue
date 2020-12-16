<template>
	<div class="map">
		<GmapMap
			:options="{
				zoomControl: true,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: true,
				disableDefaultUi: false,
			}"
			:center="center"
			:zoom="15"
			style="width: 100%; min-height: 300px"
		>
			<GmapMarker
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
				@click="center = m.position"
			/>
		</GmapMap>
	</div>
</template>
<script>
export default {
	data() {
		return {
			// default to Montreal to keep it simple
			// change this to whatever makes sense
			center: { lat: 34.04933, lng: -118.26077470000001 },
			markers: [{ position: { lat: 34.04933, lng: -118.26077470000001 } }],
			places: [],
			currentPlace: null,
		};
	},
};
</script>
<style lang="sass" scoped>
.map
    width: 100%
    height: 100%
</style>
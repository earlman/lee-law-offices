<template>
	<!-- <div class="hero-container" :style="{ 'background-image': 'url(' + bgImage + ')' }"> -->
	<div class="hero-container">
		<div class="hero">
			<!-- <button @click="changeLocale">{{ altLocale }}</button> -->
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		bgImage: '',
	},
	// computed: {
	// 	altLocale() {
	// 		return this.$i18n.locale == 'es' ? 'English' : 'Español';
	// 	},
	// },
	// methods: {
	// 	changeLocale() {
	// 		this.$i18n.locale = this.$i18n.locale == 'es' ? 'en' : 'es';
	// 		this.$router.push({
	// 			path: this.$tp(this.$route.path, this.currentLocale, true),
	// 		});
	// 	},
	// },
};
</script>
<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.hero-container
   background-position: 0 20%
   background-image: url(~@/assets/images/landing-mobile.webp)
    // min-height: 500px
   background-repeat: no-repeat
   background-size: cover
   padding: 0 var(--space-sm)
   display: flex
   flex-direction: column
   min-height: 90vh
   width: 100vw
   box-shadow: inset 0px 0px 4px 4px rgba(80, 131, 119, 0.2)

   @include md
      background-position: top center
      background-image: url(~@/assets/images/landing-hero.webp)
      min-height: 50vh

   @include lg
      padding: var(--space-md) var(--space-sm) calc(1.1 * var(--space-2xl))
      margin: auto

   @include xl
      background-position: center center

   .hero
      margin: var(--space-sm) auto
      width: 100%
      max-width: var(--layout-max-width)

      &--title
         color: var(--color-t-h)
         font-size: 20px
         margin-bottom: var(--space-xs)
         font-family: var(--font-secondary)

         @include md
            font-size: var(--d-xl)

            @include lg
               font-size: var(--d-2xl)

      &--text

         p, em
            color: var(--color-t-c)
            margin-bottom: var(--space-2xs)

      .content
         padding: var(--space-sm)
         // background-color: var(--color-b-alt)
         // margin: auto
         background-color: #faf6f5
         background-image: url(~@/assets/images/background-tile-fabric.png)
         max-width: max-content
         box-shadow: #959da533 0px 8px 24px

         @include md
            margin: unset
            padding: var(--space-sm)

         @include lg
            padding: var(--space-md)
            margin: 0

button.contact-us
   width: 100%
   margin-top: var(--space-xs)
   @include md
      width: max-content
</style>
<template>
	<!-- <div class="hero-container" :style="{ 'background-image': 'url(' + bgImage + ')' }"> -->
	<div class="hero-container">
		<div class="hero">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		bgImage: '',
	},
};
</script>
<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'
.webp .hero-container
   background-image: url(~@/assets/images/employee-mobile.webp)
   @include md
      background-image: url(~@/assets/images/employee-hero.webp)
.no-webp .hero-container
   background-image: url("~@/assets/images/employee-mobile.jpg")
   @include md
      background-image: url("~@/assets/images/employee-hero.jpg")

.hero-container
   background-position: center
    // min-height: 500px
   background-repeat: no-repeat
   background-size: cover
   padding: var(--space-md) var(--space-sm)
   display: flex
   flex-direction: column
   min-height: 600px

   @include md
      padding: var(--space-lg) var(--space-md)
      margin: auto
      max-width: var(--layout-max-width)
      background-position: 100% 0%
      background-size: 75% auto
      overflow: hidden
      width: 120vw //lol
      min-height: revert

   @include lg
      padding: var(--space-lg) var(--space-sm) var(--space-xl)
      margin: auto

   @include xl
        // max-height: 66vh

   .hero
      margin: 0 auto
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
         background-color: var(--color-b-alt)
         // background-color: #faf6f5
         // background-image: url(~@/assets/images/background-tile-fabric.png)
         // margin: auto
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
<template>
	<div class="practice-areas">
		<h2 class="section-title">{{ $t('nav.pa') }}</h2>
		<div class="areas-grid">
			<div class="harassment areas-item">
				<g-image
					height="400"
					class="areas--image"
					src="@/assets/images/harassment.jpg"
					alt="man touching woman's leg"
				></g-image>
				<div class="areas-content">
					<a :href="$tp('/practice-areas#harassment')">
						<div class="areas-content-top">
							<h3>{{$t('employee.har.h')}}</h3>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-chevron-right"
								>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</p>
						</div>
						<div v-html="$t('employee.har.p')"></div>
					</a>
				</div>
			</div>

			<div class="wrongfultermination areas-item">
				<g-image
					height="400"
					class="areas--image"
					src="@/assets/images/termination.jpg"
					alt="box on a desk"
				></g-image>
				<div class="areas-content">
					<a :href="$tp('/practice-areas#termination')">
						<div class="areas-content-top">
							<h3>{{$t('employee.ter.h')}}</h3>
							<p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-chevron-right"
								>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</p>
						</div>
                        <div v-html="$t('employee.ter.p')"></div>
					
						
					</a>
				</div>
			</div>
			<div class="discrimination areas-item">
				<g-image
					height="400"
					class="areas--image"
					src="@/assets/images/discrimination.jpg"
					alt="older woman getting lectured about computers"
				></g-image>
				<div class="areas-content">
					<a :href="$tp('/practice-areas#discrimination')">
						<div class="areas-content-top">
							<h3>{{$t('employee.dis.h')}}</h3>
							<p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-chevron-right"
								>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</p>
						</div>
						<div v-html="$t('employee.dis.p')"></div>
					</a>
				</div>
			</div>
			<div class="wagehour areas-item">
				<g-image
					height="400"
					class="areas--image"
					src="@/assets/images/wage_hour.jpg"
					position="center"
					alt="person looking at clock"
				></g-image>
				<div class="areas-content">
					<a :href="$tp('/practice-areas#wage')">
						<div class="areas-content-top">
							<h3>{{$t('employee.wh.h')}}</h3>
							<p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-chevron-right"
								>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</p>
						</div>
						<div v-html="$t('employee.wh.p')"></div>
						
					</a>
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.practice-areas
   max-width: var(--layout-max-width)
   margin: 0 auto

.areas-grid
   display: grid
   margin: var(--space-xs)
   grid-gap: var(--space-xs)

   @include md
      margin: var(--space-sm)
      grid-template-columns: 1fr 1fr
      grid-gap: var(--space-sm)

   @include xl
      margin: 0

   h3
      font-family: var(--font-secondary)
      margin-bottom: var(--space-xs)
      font-weight: 500
      color: var(--color-t)

   .areas-content
      background-color: var(--color-b-alt)
      padding: var(--space-sm)
      height: 100%

      @include md
         padding: var(--space-sm) var(--space-md)

         p
            margin-bottom: var(--space-xs)

         .areas-content-top
            justify-content: space-between
            display: flex

         a:hover
            text-decoration: none

   .areas-item
      display: flex
      flex-direction: column
      min-width: 300px
      height: 100%
      overflow: hidden

      img
         max-width: 100%

         &:hover
            .areas--image
               filter: grayscale(0)

         @include xl
            .areas--image
               transition: filter .4s,.4s ease
               filter: grayscale(100%)
</style>
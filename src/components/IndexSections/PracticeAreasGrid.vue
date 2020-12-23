<template>
	<div class="practice-areas">
		<h2 class="section-title">Practice Areas</h2>
		<div class="areas-grid">
			<div class="harassment areas-item">
				<g-image
					height="400"
					class="areas--image"
					src="@/assets/images/harassment.png"
				></g-image>
				<div class="areas-content">
					<a href="/practice-areas">
						<div class="areas-content-top">
							<h3>Harassment</h3>
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
						<p>
							Are you
							<em>
								<b>
									being treated in a way that is offensive, humiliating,
									intimidating, or threatening at work</b
								>
							</em>
							because of your race, color, national origin, gender, sexual
							orientation, being pregnant, age, religion, or disability?
						</p>
						<p>Enough is enough. It's time to stand up against your harasser.</p>
					</a>
				</div>
			</div>

			<div class="wrongfultermination areas-item">
				<g-image
					height="400"
					class="areas--image"
					src="@/assets/images/termination.png"
				></g-image>
				<div class="areas-content">
					<a href="/practice-areas">
						<div class="areas-content-top">
							<h3>Termination</h3>
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
						<p>
							Did you
							<em>
								<b> get fired </b>
							</em>

							after asking for your unpaid wages, filing your worker’s compensation
							claim, or reporting harassment? Did you
							<em>
								<b> quit </b>
							</em>
							because you could no longer tolerate harassment or discrimination?
						</p>
						<p>You deserve better. It is time to claim your lost wages.</p>
					</a>
				</div>
			</div>
			<div class="discrimination areas-item">
				<g-image
					height="400"
					class="areas--image"
					src="@/assets/images/discrimination.png"
				></g-image>
				<div class="areas-content">
					<a href="/practice-areas">
						<div class="areas-content-top">
							<h3>Discrimination</h3>
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
						<p>
							Are you being
							<em>
								<b> treated less favorably </b>
							</em>
							at work because of your race, gender, age, religion, pregnant, or
							disability?
						</p>
						<p>Stop getting screwed over. It is time to stand up for your rights.</p>
					</a>
				</div>
			</div>
			<div class="wagehour areas-item">
				<g-image
					height="400"
					class="areas--image"
					src="@/assets/images/wage_hour.png"
				></g-image>
				<div class="areas-content">
					<a href="/practice-areas">
						<div class="areas-content-top">
							<h3>Wage & Hour</h3>
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
						<p>
							Are you
							<em>
								<b> unsure if </b>
							</em>

							you are receiving all your wages? You are entitled to receiving the
							minimum wage, overtime, meal and rest breaks, and back wages.
						</p>

						<p>It is never too late to claim what you have earned.</p>
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
    margin: 0 auto var(--space-lg)

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

        &:hover
            .areas--image
                filter: grayscale(0)

        .areas--image
            transition: filter .4s,.4s ease
            filter: grayscale(100%)

        @include sm
            .areas--image
                filter: grayscale(0)
</style>
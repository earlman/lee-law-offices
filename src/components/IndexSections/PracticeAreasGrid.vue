<template>
	<div class="practice-areas">
		<h2 class="section-title">Practice Areas</h2>
		<div class="areas-grid">
			<div class="harassment areas-item">
				<g-image src="@/assets/images/practice-area.png"></g-image>
				<div class="areas-content">
					<h3>Harassment</h3>
					<p>
						Are you
						<em>
							<b>
								being treated in a way that is offensive, humiliating, intimidating,
								or threatening at work</b
							>
						</em>
						because of your race, color, national origin, gender, sexual orientation,
						being pregnant, age, religion, or disability? Does your supervisor create a
						“culture of fear” or “fraternity culture” at work? You hate to go to work
						because you are being constantly harassed at work? Enough is enough. It is
						time to stand up against your harasser.
					</p>
				</div>
			</div>
			<div class="discrimination areas-item">
				<g-image src="@/assets/images/practice-area.png"></g-image>
				<div class="areas-content">
					<h3>Discrimination</h3>
					<p>
						Are you being
						<em>
							<b> treated less favorably </b>
						</em>
						at work because of your race, gender, age, religion, pregnant, or
						disability? Stop getting screwed over. It is time to stand up for your
						rights.
					</p>
				</div>
			</div>
			<div class="wagehour areas-item">
				<g-image src="@/assets/images/practice-area.png"></g-image>
				<div class="areas-content">
					<h3>Wage & Hour</h3>
					<p>
						Are you
						<em>
							<b> unsure if </b>
						</em>

						you are receiving all your wages? You are entitled to receiving the minimum
						wage, overtime, meal and rest breaks, and back wages. It is never too late
						to claim what you have earned.
					</p>
				</div>
			</div>
			<div class="wrongfultermination areas-item">
				<g-image src="@/assets/images/practice-area.png"></g-image>
				<div class="areas-content">
					<h3>Termination</h3>
					<p>
						Did you
						<em>
							<b> get fired </b>
						</em>

						after asking for your unpaid wages, filing your worker’s compensation claim,
						or reporting harassment? Did you
						<em>
							<b> quit </b>
						</em>
						because you could no longer tolerate harassment or discrimination? You
						deserve better. It is time to claim your lost wages.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.practice-areas
    max-width: var(--layout-max-width)
    margin: 0 auto var(--space-lg)

.areas-grid
    display: grid
    @include md
        grid-template-columns: 1fr 1fr
        grid-gap: var(--space-md)

    h3
        margin-bottom: var(--space-sm)

    .areas-content
        background-color: var(--color-b-alt-2)
        padding: var(--space-sm)

    .areas-item
        display: flex
        flex-direction: column
        min-width: 300px
</style>
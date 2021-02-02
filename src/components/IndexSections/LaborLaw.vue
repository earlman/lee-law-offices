<template>
	<div class="laborlaw responsive-container">
		<div class="title">
			<h2>Labor & Employment Law</h2>
		</div>
		<div class="content">
			<div class="content--text">
				<p>
					Our Labor & Employment Law Practice covers wage and hour claims, wrongful
					termination, discrimination, and harassment. We have represented a variety of
					clients in class actions as well as individual claims. Our practice is not
					limited to employees (usually as plaintiffs) or employers (usually as
					defendants).
				</p>
				<p>
					We represent both sides. Having represented both sides of the case, we know how
					to best serve our clients to meet their unique needs.
				</p>
			</div>
			<div class="buttons">
				<g-link class="button ba" to="/employees">
					<span>For Employees</span>
					<svg
						width="29"
						height="29"
						viewBox="0 0 29 29"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19.3456 13.2917H4.8335V15.7084H19.3456V19.3334L24.1668 14.5001L19.3456 9.66675V13.2917V13.2917Z"
							fill="white"
						/>
					</svg>
				</g-link>
				<g-link class="button" to="/employers">
					<span>For Employers</span>
					<svg
						width="29"
						height="29"
						viewBox="0 0 29 29"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19.3456 13.2917H4.8335V15.7084H19.3456V19.3334L24.1668 14.5001L19.3456 9.66675V13.2917V13.2917Z"
							fill="white"
						/>
					</svg>
				</g-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.title
    margin-bottom: var(--space-sm)

.content
    align-items: start

    p
        grid-column: 1

    @include lg
        display: grid
        grid-template-columns: 3fr 1fr
        grid-gap: var(--space-md)

.buttons
    display: flex
    flex-wrap: wrap
    margin-top: var(--space-sm)

    @include lg
        margin-top: 0

    .button
        width: 100%
        min-width: max-content

    .ba
        margin-bottom: var(--space-xs)

        @include md
            margin-bottom: 0
            margin-right: var(--space-2xs)

        @include lg
            margin-right: 0
</style>
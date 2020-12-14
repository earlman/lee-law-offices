<template>
	<div class="free-consultation">
		<h2 class="section-title">Free Consultation</h2>
		<form class="form" action="">
			<div class="form-container">
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="phone" placeholder="Phone" />
				<input type="text" name="email" placeholder="Name" />
				<textarea
					name="message"
					id=""
					cols="30"
					rows="10"
					placeholder="Briefly Explain your situation."
				></textarea>
				<div class="disclaimer">
					<p>
						<strong> Disclaimer: </strong>
						This is the placeholder text for the free consultation disclaimer. This text
						will be replaced once we receive the actual text for the consultation
						disclaimer.
					</p>
					<input type="checkbox" name="disclaimer" id="disclaimer" />
					<label for="disclaimer">
						<span class="label"> I have read the Disclaimer </span>
					</label>
				</div>
				<button type="submit" class="contact-us">Contact Us</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.free-consultation
    @include lg
        max-width: var(--layout-max-width)
        margin: 0 auto var(--space-lg)

    .form
        margin: var(--space-xs)
        padding: var(--space-sm) var(--space-xs)
        background-color: var(--color-b-alt-2)

        @include md
            padding: var(--space-sm)

        *
            margin-bottom: var(--space-xs)
            width: 100%

        .disclaimer .label
            font-weight: 400
            margin-left: var(--space-xs)
</style>
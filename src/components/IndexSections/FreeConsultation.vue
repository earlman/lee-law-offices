<template>
	<div class="free-consultation">
		<h2>Free Consultation</h2>
		<form action="">
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
					This is the placeholder text for the free consultation disclaimer. This text
					will be replaced once we receive the actual text for the consultation
					disclaimer.
				</p>
			</div>
			<button type="submit" class="contact-us">Contact Us</button>
		</form>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.free-consultation
    max-width: var(--layout-max-width)
    margin: 0 auto var(--space-lg)
</style>
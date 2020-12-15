<template>
	<div class="free-consultation">
		<h2 class="section-title">{{ sectionTitle }}</h2>
		<form
			class="form"
			name="contact"
			method="post"
			v-on:submit.prevent="handleSubmit"
			action="/success"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p hidden>
				<label> Don’t fill this out: <input name="bot-field" /> </label>
			</p>
			<div class="form-container">
				<input
					type="text"
					name="name"
					placeholder="Name"
					class="name"
					v-model="form.name"
				/>
				<input
					type="text"
					name="phone"
					placeholder="Phone"
					class="phone"
					v-model="form.phone"
				/>
				<input
					type="text"
					name="email"
					placeholder="Email"
					class="email"
					v-model="form.email"
				/>
				<textarea
					name="message"
					id=""
					cols="30"
					rows="10"
					placeholder="Briefly Explain your situation."
					class="message"
					v-model="form.message"
				></textarea>
				<div class="disclaimer">
					<p>
						<strong> Disclaimer: </strong>
						This is the placeholder text for the free consultation disclaimer. This text
						will be replaced once we receive the actual text for the consultation
						disclaimer.
					</p>
					<input
						type="checkbox"
						name="disclaimer"
						id="disclaimer"
						v-model="form.disclaimer"
					/>
					<label for="disclaimer">
						<span class="label"> I have read the Disclaimer </span>
					</label>
				</div>
				<button type="submit" class="submit">Contact Us</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				phone: '',
				email: '',
				message: '',
				disclaimer: '',
			},
		};
	},
	props: {
		sectionTitle: {
			type: String,
			default: null,
		},
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
				.join('&');
		},
		handleSubmit(e) {
			if (this.form.disclaimer) {
				fetch('/', {
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: this.encode({
						'form-name': e.target.getAttribute('name'),
						...this.formData,
					}),
				})
					.then(() => this.$router.push('/success'))
					.catch((error) => alert(error));
			} else {
				alert('Please read the Disclaimer.');
			}
		},
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.free-consultation
    @include lg
        max-width: var(--layout-max-width)
        margin: 0 auto var(--space-lg)

        .form-container
            display: grid
            grid-gap: 0 var(--space-xs)
            grid-template-columns: 1fr 1fr

            .name, .message, .disclaimer, .submit
                grid-column: 1 / -1

        button
            place-self: end

    .form
        margin: var(--space-xs)
        padding: var(--space-sm) var(--space-xs)
        background-color: var(--color-b-alt-2)

        @include md
            margin: 0
            padding: var(--space-sm)

        .form-container > *
            margin-bottom: var(--space-xs)
            width: 100%

        .disclaimer
            p
                max-width: 100%
                color: var(--color-t-c)
            strong
                color: var(--color-t-h)

            .label
                font-weight: 400
                margin-left: var(--space-xs)
                text-transform: none
                color: var(--color-t-c)

        button
            max-width: 30ch
</style>
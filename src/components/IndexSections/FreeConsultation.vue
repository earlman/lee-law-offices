<template>
	<div class="responsive-container">
		<div class="free-consultation">
			<h2 v-if="sectionTitle">{{ sectionTitle }}</h2>
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
						v-model="formData.name"
					/>
					<input
						type="text"
						name="phone"
						placeholder="Phone"
						class="phone"
						v-model="formData.phone"
					/>
					<input
						type="text"
						name="email"
						placeholder="Email"
						class="email"
						v-model="formData.email"
					/>
					<textarea
						name="message"
						id=""
						cols="30"
						rows="10"
						placeholder="Briefly explain your situation."
						class="message"
						v-model="formData.message"
					></textarea>
					<div class="disclaimer">
						<input
							type="checkbox"
							name="disclaimer"
							id="disclaimer"
							v-model="formData.disclaimer"
						/>
						<label for="disclaimer">
							<span class="label">
								I have read the
								<g-link class="link" :to="$tp('/disclaimer')" target="_blank"
									>Disclaimer</g-link
								>
							</span>
						</label>
					</div>
					<button type="submit" class="submit">Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			formData: {
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
			if (this.formData.disclaimer) {
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

    @include xl

        .form-container
            display: grid
            grid-gap: 0 var(--space-xs)
            grid-template-columns: 1fr 1fr

            .name, .message, .disclaimer, .submit
                grid-column: 1 / -1

        button
            place-self: end

    .form
        margin-top: var(--space-md)

        @include lg

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

            .link
                text-decoration: underline

        button
            max-width: 30ch
</style>
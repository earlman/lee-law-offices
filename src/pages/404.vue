<template>
	<Layout>
		<div class="error-page responsive-container">
			<div>
				<h1>404 Error</h1>
				<p>The webpage you are trying to access no longer exists.</p>
				<g-link class="button ba" :to="$tp('/')">
					<span>
						{{ $t('nav.home') }} </span
					><svg
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
	</Layout>
</template>

<script>
export default {
	components: {},
};
</script>

<style lang="sass" scoped>
.error-page
   min-height: 40vh
   display: grid
   place-items: center
   margin-top: var(--space-md)

   h1
      margin-bottom: var(--space-xs)

   .button
      margin-top: var(--space-md)
</style>
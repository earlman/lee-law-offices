<template>
	<div class="layout">
		<!-- <Navbar /> -->
		<section class="hero is-medium is-primary">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-1">Under Construction</h1>
					<h2 v-if="pageSubtitle" class="subtitle">
						Thanks for visiting leelawltd.com! Our site will be available shortly.
					</h2>
				</div>
			</div>
		</section>
		<main>
			<slot />
		</main>
		<footer class="footer"></footer>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '../components/Navbar';
export default {
	props: { pageTitle: '', pageSubtitle: '', color: '' },
	components: { Navbar },
};
</script>

<style lang="scss">
@import '@/assets/scss/overrides.scss';

body {
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
		Arial, sans-serif;
	margin: 0;
	padding: 0;
	line-height: 1.5;
	height: 100%;
}
</style>

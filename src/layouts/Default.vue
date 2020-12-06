<template>
	<div class="layout">
		<Navbar />

		<main>
			<slot />
		</main>
		<Footer />
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
import Footer from '../components/Footer';
export default {
	props: { pageTitle: '', pageSubtitle: '', color: '' },
	components: { Navbar, Footer },
};
</script>

<style lang="scss">
</style>

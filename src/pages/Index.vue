<template>
	<Layout pageTitle="Home" pageSubtitle="">
		<section class="hero">
			<h1>The law is on your side. We are here to protect you.</h1>
			<p>Call us today for a free consultation! 630-444-5656. Se habla español.</p>
		</section>

		<section class="practice-areas">
			<h1>Practice Areas</h1>
			<div class="areas-grid">
				<div class="harassment">
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
				<div class="discrimination">
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
				<div class="wagehour">
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
				<div class="wrongfultermination">
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
		</section>
		<section class="free-consultation"></section>
		<section class="contact-us"></section>
	</Layout>
</template>

<page-query>
  query {
    posts: allPost {
      edges {
        node {
          id
          title
          path
          excerpt
          featuredImage
          author {
            id
            title
            path
            image
          }
          tags {
            id
            path
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
	metaInfo: {
		title: 'Home',
	},
	data() {
		return {};
	},
};
</script>

<style>
</style>

<template>
	<Layout pageTitle="Starter Blog" pageSubtitle="Gridsome / Buefy / Netlify CMS"> </Layout>
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
};
</script>

<style>
.card {
	margin-bottom: 1.5rem;
}

.cards-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	list-style: none;
	width: 100%;
	justify-content: center;
}

/* Mobile First */
.grid-item {
	width: 100%;
	transition: all 0.2s ease-in-out;
}
/*Medium Width */
@media screen and (min-width: 740px) {
	.grid-item {
		width: calc((100% / 2) - 30px);
	}
}
/*Wide Width */
@media screen and (min-width: 991px) {
	.grid-item {
		width: calc((100% / 3) - 30px);
	}
}
</style>

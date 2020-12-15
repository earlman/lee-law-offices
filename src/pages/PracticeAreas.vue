<template>
	<Layout>
		<div>
			<div v-for="edge in $page.areas.edges" :key="edge.node.title">
				<h2>{{ edge.node.title }}</h2>
				<div v-html="edge.node.content" />
			</div>
		</div>
	</Layout>
</template>

<page-query>
query {  
    areas: allPracticeAreas {
      edges {
            node {
              title
              subtitle
              content
            }
        }
    }
}
</page-query>

<script>
export default {
	metaInfo: {
		title: 'Practice Areas',
	},
};
</script>

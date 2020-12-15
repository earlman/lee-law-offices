<template>
	<Layout title="Practice Areas">
		<div class="practiceareas">
			<nav class="practiceareas--menu">
				<ul>
					<li v-for="edge in $page.areas.edges" :key="edge.node.title">
						<g-link to="/">
							{{ edge.node.title }}
						</g-link>
					</li>
				</ul>
			</nav>
			<div
				v-for="edge in $page.areas.edges"
				:key="edge.node.title"
				:class="edge.node.title"
				class="area"
			>
				<h2 class="area--title">{{ edge.node.title }}</h2>
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
import Layout from '@/layouts/Page';

export default {
	metaInfo: {
		title: 'Practice Areas',
	},
	components: {
		Layout,
	},
};
</script>

<style lang="sass" scoped>
.practiceareas
    display: flex
    flex-direction: column
    margin: var(--space-xs)
    border-radius: 3px

    &--menu

        ul
            margin: var(--space-sm) 0

        li
            padding: var(--space-2xs) var(--space-md)

            a
                font-weight: 400
                font-size: var(--d-md)
                color: var(--color-t-c)

    nav li
        list-style-type: none

    ::v-deep //fix bullet points in practice-area on mobile
        list-style-position: inside

    .area, nav
        background-color: var(--color-b-alt-2)

    .area
        padding: var(--space-xs)

    .area--title
        margin-top: var(--space-xs)
        margin-bottom: var(--space-sm)

// Layout

.practiceareas

    & > *
        margin-bottom: var(--space-md)
</style>

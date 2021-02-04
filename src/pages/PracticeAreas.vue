<template>
	<PageLayout title="Practice Areas" :bgImage="bgImage">
		<template slot="sidebar">
			<nav class="practiceareas--menu">
				<ul>
					<li v-for="edge in $page.areas.edges" :key="edge.node.title">
						<a :href="'#' + edge.node.link">
							{{ edge.node.title }}
						</a>
					</li>
				</ul>
			</nav>
		</template>
		<div class="practiceareas">
			<div
				v-for="edge in $page.areas.edges"
				:key="edge.node.title"
				:class="edge.node.title"
				class="area"
				:id="edge.node.link"
			>
				<h2 class="area--title">{{ edge.node.title }}</h2>
				<div v-html="edge.node.content" />
			</div>
		</div>
	</PageLayout>
</template>

<page-query>
query {  
    areas: allPracticeAreas {
      edges {
            node {
              title
              subtitle
              content
              link
            }
        }
    }
}
</page-query>

<script>
import PageLayout from '@/layouts/Page';
import img from '@/assets/images/practiceareas.png';

export default {
	data() {
		return {
			bgImage: img,
		};
	},
	metaInfo: {
		title: 'Practice Areas',
	},
	components: {
		PageLayout,
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.practiceareas
    display: flex
    flex-direction: column

    nav li

    ::v-deep
        //fix bullet points in practice-area on mobile
        list-style-position: inside

        @include md
            li
                margin-left: var(--space-md)
                list-style-position: outside
                width: 80%

        //colored background in some parts
        aside
            background-color: var(--color-p)
            *
                color: white

    .area
        background-color: var(--color-b-alt)

    .area
        padding: var(--space-xs)

        @include md
            padding: var(--space-md)

    .area--title
        margin-top: var(--space-xs)
        margin-bottom: var(--space-sm)

.practiceareas

    & > *
        margin-bottom: var(--space-md)
</style>

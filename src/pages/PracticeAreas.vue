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
query($locale: String) {  
    areas: allTranslations(filter: { locale: { eq: $locale }, type: { eq: "practiceareas" } }) {
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
import img from '@/assets/images/practice-areas.webp';

export default {
	data() {
		return {
			bgImage: img,
		};
	},
	metaInfo: {
		title: 'Practice Areas',
		meta: [
			{
				name: 'description',
				content:
					'The law protects you from being discriminated based on race, sex/gender, sexual orientation, age, religion, pregnancy, and disability. Call us for a free consultation.',
			},
		],
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
            border-radius: 3px
            padding-top: var(--space-sm)
            padding-bottom: var(--space-sm)
            padding-left: var(--space-xs)
            padding-right: var(--space-xs)
            margin-top: var(--space-md)
            margin-left: calc(-1*var(--space-xs))
            margin-right: calc(-1*var(--space-xs))
            margin-bottom: calc(-1*var(--space-xs))

            @include md
                margin-left: calc(-1*var(--space-md))
                margin-right: calc(-1*var(--space-md))
                margin-bottom: calc(-1*var(--space-md))

            ul
                margin-bottom: 0

                @include xl
                    column-count: 2
                    column-gap: 0

                li
                    margin-bottom: var(--space-2xs)
            *
                color: white

    .area
        background-color: var(--color-b-alt)

    .area
        padding: var(--space-xs)

        @include md
            padding: var(--space-md)

    .area--title
        // margin-top: var(--space-xs)
        margin-bottom: var(--space-xs)

.practiceareas

    & > *
        margin-bottom: var(--space-md)
</style>

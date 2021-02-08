<template>
	<PageLayout title="Who We Are" :bgImage="bgImage">
		<template slot="sidebar">
			<nav class="people--menu">
				<ul>
					<li v-for="edge in $page.people.edges" :key="edge.node.title">
						<a :href="'#' + edge.node.link">
							{{ edge.node.name }}
						</a>
					</li>
				</ul>
			</nav>
		</template>
		<div class="people">
			<div
				v-for="edge in $page.people.edges"
				:key="edge.node.title"
				:class="edge.node.title"
				class="person"
				:id="edge.node.link"
			>
				<div class="person--head">
					<h2 class="person--title">{{ edge.node.name }}</h2>
				</div>
				<div class="person--awards">
					<h3>Awards:</h3>
					<ul>
						<li v-for="award in edge.node.awards">{{ award }}</li>
					</ul>
				</div>
				<div class="person--education">
					<h3>Education:</h3>
					<ul>
						<li v-for="e in edge.node.education">{{ e }}</li>
					</ul>
				</div>
				<div class="person--admitted">
					<h3>Admitted:</h3>
					<ul>
						<li v-for="a in edge.node.admitted">{{ a }}</li>
					</ul>
				</div>
				<div class="person--content" v-html="edge.node.content" />
			</div>
		</div>
	</PageLayout>
</template>

<page-query>
query {  
    people: allPeople(sortBy: "id", order: DESC) {
      edges {
            node {
                name
                title
                education
                admitted
                awards
                content
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

.people
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

                @include lg
                    column-count: 2

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

.people

    & > *
        margin-bottom: var(--space-md)
</style>

<template>
	<PageLayout :title="$t('nav.wwa')" :bgImage="bgImage">
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
					<h2 class="person--name">{{ edge.node.name }}</h2>
					<h3 class="person--title">{{ edge.node.title }}</h3>
				</div>
				<div class="person--body">
					<div v-if="edge.node.pic" class="person--pic">
						<g-image :src="edge.node.pic"> </g-image>
					</div>
					<div class="person--arm">
						<div class="person--education">
							<h3>{{ $t('wwa.education') }}:</h3>
							<ul>
								<li v-for="e in edge.node.education">{{ e }}</li>
							</ul>
						</div>
						<div class="person--admitted">
							<h3>{{ $t('wwa.admitted') }}:</h3>
							<ul>
								<li v-for="a in edge.node.admitted">{{ a }}</li>
							</ul>
						</div>
						<div v-if="edge.node.awards[0]" class="person--awards">
							<h3>{{ $t('wwa.awards') }}:</h3>
							<ul>
								<li v-for="award in edge.node.awards">{{ award }}</li>
							</ul>
						</div>
					</div>
					<div class="person--content" v-html="edge.node.content" />
				</div>
			</div>
		</div>
	</PageLayout>
</template>

<page-query>
query($locale: String) {  
    people: allTranslations(filter: { locale: { eq: $locale }, type: { eq: "person" } }, sortBy: "order", order: ASC) {
      	edges {
            node {
                name
                title
                education
                admitted
                awards
                content
                # link
                # pic (width: 720, height: 200, quality: 90)
            }
        }
    }
}
</page-query>

<script>
import PageLayout from '@/layouts/Page';
import img from '@/assets/images/landing-hero.webp';

export default {
	data() {
		return {
			bgImage: img,
		};
	},
	metaInfo: {
		title: 'Who We Are',
	},
	components: {
		PageLayout,
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.people
    & > *
        margin-bottom: var(--space-md)

.person
    padding: var(--space-sm)
    background-color: var(--color-b-alt)

    &--head
        margin-bottom: var(--space-xs)
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        align-items: flex-end
        border-radius: 0
        padding-bottom: var(--space-2xs)
        border-bottom: 2px solid rgba(77, 97, 85, .15)

    &--name
        min-width: 200px

    &--body
        @include md
            margin-top: var(--space-sm)
            display: grid
            grid-template-columns: 1fr 2fr
            grid-gap: var(--space-sm)

    ul
        margin-bottom: var(--space-xs)

    @include md
        padding: var(--space-md)

.people
    margin-bottom: var(--space-xl)

    .person--pic
        grid-row: 1
        img
            max-width: 100%

    .person--arm
        grid-row: 1
        grid-column: span 2

    .person--content
        grid-column: 1 / -1

    .person--name
        font-size: var(--d-3xl)
        // font-weight: 500

    .person--title
        font-size: var(--d-lg)

    h3
        font-weight: 600
        font-size: var(--d-md)
        color: var(--color-p)

    ::v-deep
        //fix bullet points on mobile
        list-style-position: inside

        @include md
            li
                margin-left: var(--space-sm)
                list-style-position: outside
                // width: 80%
</style>


<template>
	<PageLayout title="Who We Are" :bgImage="bgImage">
		<template slot="sidebar">
			<!-- SEARCH -->
		</template>
		<div class="results">
			<input
				id="search"
				v-model="searchTerm"
				class="input"
				type="text"
				placeholder="Search"
			/>
			{{ searchResults }}
			<!-- SEARCH RESULTS -->
			<button @click="getResults">Search</button>
		</div>
	</PageLayout>
</template>

<page-query>
query {  
    people: allPeople(sortBy: "order", order: ASC) {
      edges {
            node {
                name
                title
                education
                admitted
                awards
                content
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
			searchTerm: '',
			searchResults: '',
		};
	},
	// computed: {
	// 	searchResults() {},
	// },
	methods: {
		getResults() {
			const searchTerm = this.searchTerm;
			if (searchTerm.length < 3) return [];
			let results = this.$search.search({ query: searchTerm, limit: 5 });
			this.searchResults = results;
			return;
		},
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


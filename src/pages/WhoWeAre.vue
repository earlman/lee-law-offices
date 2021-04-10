<template>
	<PageLayout title="Who We Are" :bgImage="bgImage">
		<template slot="sidebar">
			<!-- SEARCH -->
			<div class="input">
				<input
					id="search"
					v-model="searchTerm"
					class="input"
					type="text"
					placeholder="Search"
					ref="search"
					v-on:keyup.enter="getResults"
				/>
				<button @click="getResults">Search</button>
			</div>
		</template>
		<div class="results">
			<h2>Results:</h2>
			<!-- <p>TODO: add list of employees</p> -->
			<div class="results--list" v-if="searchResults.people">
				<div v-for="person in searchResults.people" :key="person.name" class="result">
					<a :href="person.path">
						<h3>
							{{ person.node.name }}
						</h3>
						<h4>
							{{ person.node.title }}
						</h4>
					</a>
				</div>
				<!-- {{ searchResults }} -->
			</div>
			<div v-if="searchResults.message">
				{{ searchResults.message }}
			</div>
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
			searchResults: {
				message: '',
				people: [],
			},
		};
	},
	// computed: {
	// 	searchResults() {},
	// },
	methods: {
		getResults() {
			this.searchResults.message = '';
			const searchTerm = this.searchTerm;
			// if (searchTerm.length < 3) return [];
			let results = this.$search.search({ query: searchTerm, limit: 5 });
			if (results.length == 0) {
				this.searchResults.message = 'No results found';
			}
			this.searchResults.people = results;
			return;
		},
	},
	metaInfo: {
		title: 'Who We Are',
	},
	components: {
		PageLayout,
	},
	mounted() {
		this.$refs.search.focus();
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.results
    background-color: var(--color-b-alt)
    height: 100%
    padding: var(--space-sm)

    @include lg
        padding: var(--space-md)

    h2
        margin-bottom: var(--space-md)

.input
    display: grid
    place-items: center
    margin: var(--space-2xs) var(--space-xs)

    input
        margin-bottom: var(--space-xs)
        width: 100%

.result
    padding-left: var(--space-md)
    padding-top: var(--space-xs)
    padding-bottom: var(--space-xs)
    border-left: solid 5px var(--color-p)

    &:hover
        background-color: var(--color-b)
</style>


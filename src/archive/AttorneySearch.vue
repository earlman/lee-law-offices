<template>
	<PageLayout :title="$t('nav.wwa')" :bgImage="bgImage">
		<template slot="sidebar">
			<!-- SEARCH -->
			<div class="input">
				<input
					id="search"
					v-model="searchTerm"
					class="input"
					type="text"
					:placeholder="$t('wwa.search')"
					ref="search"
					v-on:keyup.enter="getResults"
				/>
				<button @click="getResults">{{ $t('wwa.search') }}</button>
			</div>
		</template>
		<div class="results">
			<h2>{{ $t('wwa.results') }}</h2>
			<!-- <p>TODO: add list of employees</p> -->
			<div class="results--list" v-if="searchResults.people">
				<div v-for="person in searchResults.people" :key="person.name" class="result">
					<a :href="$tp('/people/' + person.node.filename)">
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
			<p v-if="!searchResults.people[0]">
				{{ $t('wwa.instructions') }}
			</p>
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
                path
                content
                fileInfo {
                    name
                }
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
			searchTerm: '',
			searchResults: {
				message: '',
				people: [],
			},
		};
	},

	methods: {
		getResults() {
			this.searchResults.message = '';
			const searchTerm = this.searchTerm;
			// if (searchTerm.length < 3) return [];
			let results = this.$search.search({ query: searchTerm, limit: 5 });
			if (results.length == 0) {
				this.searchResults.message = 'No results found';
			}
			this.searchResults.people = this.filterLocale(results);
			return;
		},
		filterLocale(people) {
			const results = people.filter((person) => {
				return person.locale == this.$i18n.locale;
			});
			console.log(results);
			return results;
		},
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

   @include lg
      width: 300px
      place-items: start
      margin: 0

   @include xl
      width: 400px

   input
      width: 100%
      margin-bottom: var(--space-xs)

.result
   padding-left: var(--space-md)
   padding-top: var(--space-xs)
   padding-bottom: var(--space-xs)
   border-left: solid 5px var(--color-p)

   &:hover
      background-color: var(--color-b)
</style>


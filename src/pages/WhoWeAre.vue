<template>
	<PageLayout :title="$t('nav.wwa')" :bgImage="bgImage">
		<!-- <template slot="sidebar">
			<nav class="people--menu">
				<ul>
					<li v-for="edge in $page.people.edges" :key="edge.node.title">
						<a :href="'#' + edge.node.link">
							{{ edge.node.name }}
						</a>
					</li>
				</ul>
			</nav>
		</template> -->
		<!-- <div class="people">
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
        </div> -->
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


<template>
	<PageLayout title="Who We Are" :bgImage="bgImage">
		<template slot="sidebar">
			<a href="/who-we-are">⬅&nbsp;&nbsp;&nbsp;Back to search</a>
		</template>
		<div class="people">
			<div class="person">
				<div class="person--head">
					<h2 class="person--name">{{ $page.people.name }}</h2>
					<h3 class="person--title">{{ $page.people.title }}</h3>
				</div>
				<div class="person--body">
					<div v-if="$page.people.pic" class="person--pic">
						<g-image :src="$page.people.pic"> </g-image>
					</div>
					<div class="person--arm">
						<div class="person--education">
							<h3>Education:</h3>
							<ul>
								<li v-for="e in $page.people.education">{{ e }}</li>
							</ul>
						</div>
						<div class="person--admitted">
							<h3>Admitted:</h3>
							<ul>
								<li v-for="a in $page.people.admitted">{{ a }}</li>
							</ul>
						</div>
						<div v-if="$page.people.awards[0]" class="person--awards">
							<h3>Awards:</h3>
							<ul>
								<li v-for="award in $page.people.awards">{{ award }}</li>
							</ul>
						</div>
					</div>
					<div class="person--content" v-html="$page.people.content" />
				</div>
			</div>
		</div>
	</PageLayout>
</template>

<page-query>
query ($id: ID!) {
    people(id: $id) {
        name
        title
        education
        admitted
        awards
        content
        # pic (width: 720, height: 200, quality: 90)
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

.sidebar
    a
        color: var(--color-p)
        &:hover
            text-decoration: underline
</style>


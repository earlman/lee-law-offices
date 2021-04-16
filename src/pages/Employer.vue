<template>
	<Layout pageTitle="Employer Home" pageSubtitle="" class="employee-page">
		<section class="h">
			<hero :bgImage="bgImage">
				<div class="content">
					<h1 class="hero--title" v-html="$t('employer.hero.header')"></h1>
					<div class="hero--text">
						<p class="hero--text">{{ $t('employer.hero.paragraph') }}</p>

						<p>(323) 289-2260, Ext. 1<br /><em>Se habla Español</em></p>
					</div>
					<g-link :to="$tp('/contact-us')">
						<button class="contact-us">{{ $t('nav.ca') }}</button>
					</g-link>
				</div>
			</hero>
		</section>
		<section>
			<div class="employer--content responsive-container">
				<div class="inner">
					<div class="contentgrid">
						<h2 id="employment-law-defense">{{ $t('employer.eld.header') }}</h2>
						<p>{{ $t('employer.eld.paragraph') }}</p>
						<ul>
							<li v-for="(item, i) in $t('employer.eld.list')" :key="i">
								{{ item }}
							</li>
						</ul>
						<g-image
							src="~/assets/images/person_1.webp"
							width="1000"
							height="600"
							position="top"
						/>
					</div>
					<hr />
					<div class="contentgrid">
						<h2 id="employment-class-action-defense-">
							{{ $t('employer.ecad.header') }}
						</h2>
						<p>{{ $t('employer.ecad.paragraph') }}</p>
						<ul>
							<li v-for="(item, i) in $t('employer.ecad.list')" :key="i">
								{{ item }}
							</li>
						</ul>
						<g-image src="~/assets/images/person_2.webp" width="1000" height="600" />
					</div>
				</div>
			</div>
		</section>
		<section>
			<free-consultation :sectionTitle="$t('index.case-eval.header')" />
		</section>
	</Layout>
</template>

<page-query>
query {
    pageContent(id: "employer"){
        content
    }
}
</page-query>

<script>
import PracticeAreasGrid from '../components/PracticeAreasGrid.vue';
import FreeConsultation from '../components/IndexSections/FreeConsultation.vue';
import ContactUs from '../components/IndexSections/ContactUs.vue';
import Hero from '../components/Employer-Hero.vue';
import img from '@/assets/images/discrimination.webp';

export default {
	components: { PracticeAreasGrid, FreeConsultation, ContactUs, Hero },
	metaInfo: {
		title: 'Employer Law',
		meta: [
			{
				name: 'description',
				content:
					'The law is on your side. No legal fees until we win. Call us today for a free case evaluation.',
			},
		],
	},
	data() {
		return {
			bgImage: img,
		};
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

section
    overflow: hidden
    margin-bottom: var(--space-lg)
    color: var(--color-p)

.employer--content
    background-color: var(--color-b-alt)

    @include md
        padding: var(--space-lg) var(--space-lg)

    @include lg
        width: 100%
        // padding: var(--space-lg) var(--space-xl)
        // max-width: max-content
        margin-left: auto
        margin-right: auto

        .contentgrid
            display: grid
            grid-gap: 0 var(--space-xs)
            grid-template-columns: 1fr 1fr

            h2
                grid-column: 1/-1

            p
                grid-column: 1/-1
                font-size: var(--d-lg)

            ul
                font-size: var(--d-lg)
                grid-column: 1

    .inner
        margin: auto
        max-width: 75ch
        display: grid
        place-content: center

        @include lg
            max-width: 100%

        p, ul
            color: var(--color-h)

        div
            display: grid
            place-content: center

        h2
            margin-bottom: var(--space-xs)

        img
            max-width: 100%
            margin-left: auto
            margin-right: auto
            margin-top: var(--space-sm)
            margin-bottom: var(--space-md)

    ::v-deep
        //fix bullet points in practice-area on mobile
        // list-style-position: outside

        h4
            max-width: 600px
            margin-left: auto
            margin-right: auto
            margin-bottom: var(--space-2xs)

        ul
            margin-left: auto
            margin-right: auto
            max-width: 600px
            display: grid
            list-style: none
            list-style-position: outisde
            list-style-image: url(~@/assets/images/bullet.svg)
            margin-top: var(--space-xs)
            margin-left: var(--space-sm)

            &:last-child
                margin-bottom: 0

            li
                line-height: 2
                padding-left: var(--space-xs)

button.contact-us
    max-width: 250px
    margin: auto
</style>

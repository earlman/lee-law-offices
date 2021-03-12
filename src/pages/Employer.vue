<template>
	<Layout pageTitle="Employer Home" pageSubtitle="" class="employee-page">
		<section class="h">
			<hero :bgImage="bgImage">
				<div class="content">
					<h1 class="hero--title">We're here to protect you<br />and your business</h1>
					<div class="hero--text">
						<p class="hero--text">Call us today for a free case evaluation</p>

						<p>(323) 289-2260<br /><em>Se habla Español</em></p>
					</div>
					<g-link to="/contact-us">
						<button class="contact-us">Contact Us</button>
					</g-link>
				</div>
			</hero>
		</section>
		<section>
			<div class="employer--content responsive-container">
				<div class="inner">
					<h2 id="employment-law-defense">Employment Law Defense</h2>
					<p>
						We know how much money, time and energy it takes to run a business
						especially when California labor laws are so harsh on employers. If you have
						a business in California and are having any issues with a former or current
						employee then you have come to the right place. Our team will help you build
						a strong and cost-effective defense to protect your business from employee
						friendly California state laws, vindictive former employees and greedy
						employee side attorneys looking only to exploit you for the following
						matters:
					</p>
					<ul>
						<li>Failure to pay overtime wages</li>
						<li>Failure to provide meal and rest breaks</li>
						<li>Failure to provide wage statements</li>
						<li>Hostile work environment</li>
						<li>Sexual harassment by a supervisor</li>
						<li>Discrimination based on age, race, gender or sexual orientation</li>
						<li>
							Retaliation after they complained about harassment or discrimination
						</li>
						<li>Failure to prevent harassment, discrimination and/or retaliation</li>
						<li>Wrongful termination</li>
					</ul>
					<g-image src="~/assets/images/person_1.jpg" width="500" />
					<h2 id="employment-class-action-defense-">Employment Class Action Defense**</h2>
					<p>
						Have you been served with a class action complaint? We know, the words
						“class action” can cause panic and look intimidating. The current California
						litigation climate is booming with wage and hour class actions that are
						often propelled by aggressive plaintiff’s attorneys. To defend against a
						potential class action employers need someone with a deep and comprehensive
						knowledge of how to tackle class actions. Our team can provide you with an
						effective and cost-efficient strategic defense against seemingly
						intimidating class action complaints for the following matters:
					</p>
					<ul>
						<li>Failure to pay overtime wages</li>
						<li>Failure to provide meal and rest breaks</li>
						<li>Failure to provide wage statements</li>
						<li>Failure to timely pay wages due at termination</li>
						<li>Failure to pay minimum wages</li>
						<li>Failure to reimburse for business expenses</li>
						<li>Unfair business practice</li>
					</ul>
					<g-image src="~/assets/images/person_2.jpg" width="500" />
				</div>
			</div>
		</section>
		<section>
			<free-consultation sectionTitle="Free Case Evaluation Form" />
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
import PracticeAreasGrid from '../components/IndexSections/PracticeAreasGrid.vue';
import FreeConsultation from '../components/IndexSections/FreeConsultation.vue';
import ContactUs from '../components/IndexSections/ContactUs.vue';
import Hero from '../components/Employer-Hero.vue';
import img from '@/assets/images/discrimination.png';

export default {
	components: { PracticeAreasGrid, FreeConsultation, ContactUs, Hero },
	metaInfo: {
		title: 'Home',
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

.employer--content
    background-color: var(--color-b-alt)

    @include md
        padding: var(--space-lg) var(--space-lg)

    @include xl
        padding: var(--space-lg) var(--space-xl)
        max-width: max-content
        margin-left: auto
        margin-right: auto

    .inner
        margin: auto
        max-width: 75ch
        display: grid
        place-content: center

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
                color: var(--color-p)
                line-height: 2
                padding-left: var(--space-xs)

.cta
    border-top: var(--color-p) solid 1px
    border-bottom: var(--color-p) solid 1px
    background-color: rgba(247, 249, 247, .9)
    border-radius: 0

    @include xl
        padding: var(--space-lg) var(--space-xl)
        max-width: max-content
        margin-left: auto
        margin-right: auto

    h4
        font-size: var(--d-xl)
        color: var(--color-t-h)
        margin-bottom: var(--space-2xs)
        font-family: var(--font-secondary)
        font-weight: 600
        margin-left: auto
        margin-right: auto
        margin-bottom: var(--space-2xs)
        max-width: 600px

button.contact-us
    max-width: 250px
    margin: auto
</style>
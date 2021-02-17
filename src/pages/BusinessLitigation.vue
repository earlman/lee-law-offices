<template>
	<PageLayout
		title="Business & Commercial Litigation"
		class="page-buslit"
		:bgImage="bgImage"
		:noSidebar="true"
	>
		<div class="content">
			<div v-html="$page.pageContent.content" class="content--text"></div>
			<div class="content--allegations">
				<h4>Example Allegations:</h4>
				<ul>
					<li v-for="(item, i) in $page.pageContent.allegations" :key="i">{{ item }}</li>
				</ul>
			</div>
		</div>
	</PageLayout>
</template>

<page-query>
query {
    pageContent(id: "business-litigation"){
        content
        allegations
    }
}
</page-query>

<script>
import PageLayout from '@/layouts/Page';
import img from '@/assets/images/contactus.png';

export default {
	data() {
		return {
			bgImage: img,
		};
	},
	metaInfo: {
		title: 'Contact Us',
	},
	components: {
		PageLayout,
	},
};
</script>

<style lang="sass" scoped>
@import '@/styles/04 - Layout/_media.sass'

.page-buslit

    ::v-deep h4
        font-family: var(--font-secondary)
        font-weight: 500
        margin-top: 0
        margin-bottom: var(--space-xs)

    .content
        margin-bottom: var(--space-lg)
        display: grid
        grid-gap: var(--space-sm)

        @include xl
            grid-template-columns: 2fr 1fr
            margin-bottom: var(--space-xl)

        &--text
            padding: var(--space-sm)
            background-color: white

            @include md
                padding: var(--space-md)
            @include lg
                padding: var(--space-lg)

        &--allegations
            background-color: var(--color-p)
            padding-left: var(--space-md)
            padding-right: var(--space-md)
            padding-top: var(--space-md)
            padding-bottom: var(--space-md)

            h4
                margin-top: 0
                margin-bottom: var(--space-2xs)

            li
                margin-left: var(--space-sm)

            *
                color: white
</style>
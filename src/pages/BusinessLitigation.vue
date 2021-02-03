<template>
	<PageLayout
		title="Business Litigation"
		class="page-buslit"
		:bgImage="bgImage"
		:noSidebar="true"
	>
		<div class="content">
			<div v-html="$page.pageContent.content" class="content--text"></div>
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

    .content
        @include lg
            display: grid
            grid-template-columns: 3fr 1fr

        &--text
            background-color: white
</style>
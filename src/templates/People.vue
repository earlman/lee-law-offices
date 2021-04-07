<template>
	<div>
		<h1 v-html="$page.people.title" />
		<div v-html="$page.people.content" />
	</div>
</template>

<page-query>
query ($id: ID!) {
  people(id: $id) {
    title
    content
  }
}
</page-query>


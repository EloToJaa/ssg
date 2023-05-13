<script lang="ts">
	import Pagination from '$lib/components/Posts/Pagination.svelte';
	import Posts from '$lib/components/Posts/Posts.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Posts posts={data.posts} />
<Pagination currentPage={data.page} totalPages={data.totalPages} />

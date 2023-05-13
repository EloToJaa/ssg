<script lang="ts">
	import Post from '$lib/components/Posts/Post.svelte';
	import type PostType from '$lib/types/Post';

	export let posts: PostType[];
</script>

<div class="pt-3">
	{#each posts as post}
		<Post {post} />
	{/each}
</div>

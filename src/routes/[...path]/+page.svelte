<script lang="ts">
	import '../../prism.css';

	import PagePanel from '$lib/components/Utils/PagePanel.svelte';
	import type { SvelteComponentTyped } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;

	const dir = data.dir;
	const title = data.frontmatter.title;
	const author = data.frontmatter.author;
	const date = data.frontmatter.date;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if dir[0] === 'blog'}
	<PagePanel>
		<h1>{title}</h1>
		<p>By {author} on {date}</p>

		<svelte:component this={component} />
	</PagePanel>
{:else if dir[0] === 'ctf'}
	<!-- TODO: different layout -->
{:else}
	<svelte:component this={component} />
{/if}

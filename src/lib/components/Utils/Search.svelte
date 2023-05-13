<script lang="ts">
	import { Search } from 'flowbite-svelte';

	export let value: string = '';

	let innerWidth = 0;
	let size: string = 'md';
	$: size = innerWidth < 768 ? 'md' : 'lg';
</script>

<svelte:window bind:innerWidth />

<form method="get" action="?/search">
	<Search {size} name="q" {value} />
</form>

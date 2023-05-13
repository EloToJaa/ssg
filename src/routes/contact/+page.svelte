<script lang="ts">
	import Discord from '$lib/components/Icons/Discord.svelte';
	import Github from '$lib/components/Icons/Github.svelte';
	import Twitter from '$lib/components/Icons/Twitter.svelte';
	import PagePanel from '$lib/components/Utils/PagePanel.svelte';
	import { Button } from 'flowbite-svelte';

	const btnClass: string = `text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-24 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-2xl`;
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<PagePanel>
	<div class="grid gap-y-3 place-content-center">
		<h1 class="text-center mb-5 text-7xl">EloToJa</h1>
		<Button {btnClass} href="mailto:elotoja@protonmail.com">
			<div class="ml-3 my-auto text-xl font-semibold py-1.5">elotoja@protonmail.com</div></Button
		>
		<Button {btnClass} href="https://twitter.com/elotoja_"
			><Twitter size={9} active />
			<div class="ml-3 my-auto text-xl font-semibold">Twitter</div></Button
		>
		<Button {btnClass} href="https://discordapp.com/users/308939544407834625"
			><Discord size={9} active />
			<div class="ml-3 my-auto text-xl font-semibold">Discord</div></Button
		>
		<Button {btnClass} href="https://github.com/EloToJaa"
			><Github size={9} active />
			<div class="ml-3 my-auto text-xl font-semibold">Github</div></Button
		>
	</div>
</PagePanel>

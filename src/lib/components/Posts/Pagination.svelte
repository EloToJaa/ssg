<script lang="ts">
	import { page } from '$app/stores';
	import { Button, ButtonGroup } from 'flowbite-svelte';

	export let currentPage: number;
	export let totalPages: number;
	let path = $page.url.pathname;
	let searchTerm: string | null;
	$: searchTerm = $page.url.searchParams.get('q');

	let pages: { name: string; href: string; active: boolean }[];
	$: pages = Array.from({ length: totalPages }, (_, i) => {
		return {
			name: (i + 1).toString(),
			href: `${path}?page=${i + 1}${searchTerm ? `&q=${searchTerm}` : ''}`,
			active: false
		};
	});

	$: {
		pages.forEach((page) => {
			const splitUrl = page.href.split('?');
			const queryString = splitUrl.slice(1).join('?');
			const hrefParams = new URLSearchParams(queryString);
			page.active = hrefParams.get('page') === currentPage.toString();
		});
		pages = pages;
	}

	const baseClass =
		'p-3 border-2 border-blue-50 dark:border-slate-900 font-semibold text-xl hover:text-gray-700 dark:text-white dark:hover:text-white';
	const btnClass =
		baseClass +
		'text-gray-900 bg-blue-50 hover:bg-blue-200 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700';
	const activeBtnClass = baseClass + 'text-blue-600 bg-blue-200 dark:bg-gray-700';
</script>

<div class="pt-2">
	<ButtonGroup>
		<Button
			btnClass={`rounded-l-2xl ${btnClass}`}
			color="blue"
			href={`${path}?page=${Math.max(1, currentPage - 1).toString()}${
				searchTerm ? `&q=${searchTerm}` : ''
			}`}>Previous</Button
		>
		{#each pages as page}
			<Button btnClass={page.active ? activeBtnClass : btnClass} href={page.href}
				>{page.name}</Button
			>
		{/each}
		<Button
			btnClass={`rounded-r-2xl ${btnClass}`}
			color="blue"
			href={`${path}?page=${Math.min(totalPages, currentPage + 1).toString()}${
				searchTerm ? `&q=${searchTerm}` : ''
			}`}>Next</Button
		>
	</ButtonGroup>
</div>

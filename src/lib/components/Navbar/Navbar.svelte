<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import DarkMode from './DarkMode.svelte';
	import Logo from './Logo.svelte';
	import SearchBar from './SearchBar.svelte';

	const links = [
		{ id: '/', name: 'Home' },
		{ id: '/contact', name: 'Contact' }
	];
</script>

<Navbar let:hidden let:toggle navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 ">
	<Logo />
	<div class="flex md:order-2">
		<SearchBar />
		<DarkMode />
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl {hidden} divClass="w-full md:block md:w-auto">
		{#each links as link}
			<NavLi href={link.id} active={$page.route.id === link.id}>
				<div class="font-bold text-md">{link.name}</div>
			</NavLi>
		{/each}
	</NavUl>
</Navbar>

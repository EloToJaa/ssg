<script lang="ts">
	import { Footer, FooterCopyright, FooterIcon } from 'flowbite-svelte';
	import Discord from '../Icons/Discord.svelte';
	import Github from '../Icons/Github.svelte';
	import Twitter from '../Icons/Twitter.svelte';
</script>

<div class="w-full mt-4">
	<Footer footerType="sitemap">
		<div class="py-6 px-4  dark:bg-gray-900 bg-blue-50 md:flex md:items-center md:justify-between">
			<FooterCopyright
				spanClass="text-sm text-black dark:text-gray-300 sm:text-center"
				href="/"
				by="EloToJa™"
			/>
			<div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
				<FooterIcon href="https://twitter.com/elotoja_">
					<Twitter size={5} />
				</FooterIcon>
				<FooterIcon href="https://discordapp.com/users/308939544407834625">
					<Discord size={5} />
				</FooterIcon>
				<FooterIcon href="https://github.com/EloToJaa">
					<Github size={5} />
				</FooterIcon>
			</div>
		</div></Footer
	>
</div>

import fs from 'fs';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

export const mdsvexConfig = defineConfig({
	smartypants: { dashes: 'oldschool' },
	extensions: ['.svelte.md', '.md', '.svx'],
	remarkPlugins: [],
	rehypePlugins: [],
	highlight: {
		alias: {},
		theme: 'material',
		highlighter: (lang, code) => {
			return `<pre class="language-${normalised_lang}">{@html \`<code class="language-${normalised_lang}">${highlighted}</code>\`}</pre>`;
		}
	}
});

export const generateEntries = (dir) => {
	return recurseEntries(dir, dir);
};

const recurseEntries = (mainDir, dir) => {
	const files = fs.readdirSync(dir, { withFileTypes: true });
	const entries = files.reduce((acc, file) => {
		if (file.isDirectory()) {
			acc.push(...recurseEntries(mainDir, `${dir}/${file.name}`));
		} else if (file.isFile() && file.name.endsWith('.md')) {
			acc.push(`${dir.replace(mainDir, '')}/${file.name.replace('.md', '')}`);
		}
		return acc;
	}, []);
	return entries;
};

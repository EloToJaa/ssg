import { slugFromPath } from '$lib/utils/slugFromPath';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const path = params.path.split('/');
	path.pop();
	const slug = path.pop();
	const dir = path;

	const modules = import.meta.glob(`/src/content/**/*.md`);

	let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === slug) {
			match = { path, resolver: resolver as unknown as App.MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || !post.metadata.published) {
		throw error(404);
	}

	return {
		component: post.default,
		frontmatter: post.metadata,
		dir
	};
};

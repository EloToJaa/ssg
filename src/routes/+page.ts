import { slugFromPath } from '$lib/utils/slugFromPath';
import type { PageLoad } from './[...path]/$types';

const MAX_POSTS = 10;

export const load: PageLoad = async () => {
	// TODO: implement pagination
	const modules = import.meta.glob(`/src/posts/*.md`);

	const page = 1;

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.BlogPost)
		)
	);

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return {
		posts: publishedPosts,
		page,
		totalPages: Math.ceil(posts.length / MAX_POSTS)
	};
};

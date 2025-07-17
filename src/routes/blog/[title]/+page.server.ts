import type { PageServerLoad, PageServerLoadEvent } from "./$types";
import { blogPosts } from "../../../stores";
import { get } from "svelte/store";

// yes this was made by gitbub copilot

const load: PageServerLoad = async ({ params }: PageServerLoadEvent) => {
	   const allPosts = get(blogPosts) as { error?: boolean; posts?: any[] };
	   let post: any = {};
	   let title = "";
	   if (allPosts && !allPosts.error && Array.isArray(allPosts.posts)) {
			   post = allPosts.posts.find((p: any) => p.slug === params.title) || {};
			   title = post.title || "";
	   }
	   return {
			   post,
			   allPosts,
			   title
	   };
};

export { load };

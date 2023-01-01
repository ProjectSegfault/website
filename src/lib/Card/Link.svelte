<script lang="ts">
	export let url: string = "";
	let classes: string = "";
	export { classes as class };
</script>

<a
	href={url}
	class="border-none rounded-2 p-2 cursor-pointer font-primary text-secondary decoration-none w-fit text-xl flex items-center {classes}"
>
	<slot />
</a>

<style>
	.web,
	.email,
	.picture,
	.pgp,
	.link {
		@apply bg-alt text-alt-text transition-all duration-250;
	}

	.web:hover,
	.email:hover,
	.picture:hover,
	.pgp:hover {
		@apply bg-accent text-alt;
	}

	.matrixcolored {
		@apply bg-alt text-alt-text;
	}

	.discordcolored {
		@apply bg-[#5865f2] text-white;
	}

	.gitcolored {
		@apply bg-[#f05032] text-white;
	}

	.githubcolored {
		@apply bg-alt text-alt-text;
	}
</style>

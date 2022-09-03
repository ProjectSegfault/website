<script lang="ts">
	export let url: any;
	let classes: string = "";
	export { classes as class };
</script>

<a href={url} class={classes}>
	<slot />
</a>

<style>
	.web,
	.email,
	.picture,
	.pgp,
	.link {
		background-color: var(--alt);
		color: var(--alt-text);
		transition: all 0.25s;
	}

	.web:hover,
	.email:hover,
	.picture:hover,
	.pgp:hover {
		background-color: var(--accent);
		color: var(--alt);
	}

	.matrixcolored {
		background-color: var(--alt);
		color: var(--alt-text);
	}

	.discordcolored {
		background-color: #5865f2;
		color: #fff;
	}

	.gitcolored {
		background-color: #f05032;
		color: #fff;
	}

	.githubcolored {
		background-color: var(--alt);
		color: var(--alt-text);
	}

	a {
		border: none;
		border-radius: 10px;
		padding: 0.5rem;
		cursor: pointer;
		font-family: var(--font-primary);
		color: var(--secondary);
		text-decoration: none;
		width: fit-content;
		font-size: 20px;
		display: flex;
		align-items: center;
	}
</style>

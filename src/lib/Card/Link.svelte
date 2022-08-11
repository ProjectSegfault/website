<script lang="ts">
	export let url: any;
	export let classes: string;
</script>

<a href={url} class={classes}>
	<slot />
</a>

<style>
	.web,
	.email,
	.picture,
	.pgp {
		background-color: var(--alt);
		color: var(--alt-text);
		font-size: 20px;
		transition: all 0.25s;
		display: flex;
		align-items: center;
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
		font-size: 20px;
		display: flex;
		align-items: center;
	}

	.discordcolored {
		background-color: #5865f2;
		color: #fff;
		font-size: 20px;
		display: flex;
		align-items: center;
	}

	.gitcolored {
		background-color: #F05032;
		color: #fff;
		font-size: 20px;
		display: flex;
		align-items: center;
	}

	.giteacolored {
		background-color: #609926;
		color: #fff;
		font-size: 20px;
		display: flex;
		align-items: center;
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
	}
</style>
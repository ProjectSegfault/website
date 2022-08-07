<script lang="ts">
    export let url: any;
    export let classes: string;
</script>

<a href={url} class="{classes}">
    <slot />
</a>

<style>
    .web,
	.email,
	.picture,
	.pgp {
		background-color: var(--tertiary);
		color: #fff !important;
		font-size: 20px;
		height: 23px;
		transition: all 0.25s;
	}

	.web:hover,
	.email:hover,
	.picture:hover,
	.pgp:hover {
		background-color: var(--accent);
		color: #333 !important;
	}

    .matrixcolored {
		background-color: #333;
		color: #fff !important;
		font-size: 20px;
		height: 23px;
	}

	.discordcolored {
		background-color: #5865f2;
		color: #fff !important;
		font-size: 20px;
		height: 23px;
	}

	.githubcolored {
		background-color: #333;
		color: #fff !important;
		font-size: 20px;
		height: 23px;
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
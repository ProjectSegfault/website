<script>
	import * as global from "../i18n/_global.json";
	import { t } from '$lib/translations';
</script>

<nav>
	<a class="brand" href="/">
		<img src="/logo.png" alt="{global.NAME} logo" />
		<span
			style="color: var(--accent-secondary); margin-left: 4px; margin-right: 4px;"
			>{global.PROJECT}</span
		>
		<span style="color: var(--accent-primary); margin-right: 8px;"
			>{global.SEGFAULT}</span
		>
	</a>

	<div class="links">
		<a href={global.INSTANCES}>{$t('common.NAVBAR_INSTANCES')}</a>
		<a href="/minecraft">{global.MINECRAFT}</a>
		<a href="/donate">{$t('common.NAVBAR_DONATE')}</a>
		<a href={global.FAQ_URL}>{$t('common.NAVBAR_FAQ')}</a>
		<a href="/contact">{$t('common.NAVBAR_CONTACT')}</a>
		<a href={global.BLOG_URL}>{$t('common.NAVBAR_BLOG')}</a>
	</div>
</nav>

<style>
	nav {
		background-color: var(--secondary);
		padding: 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	a.brand {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-decoration: none;
	}

	.links > * {
		background-color: var(--tertiary);
		border: none;
		border-radius: 10px;
		padding: 1rem;
		cursor: pointer;
		color: var(--text);
		font-family: var(--font-primary);
		text-decoration: none;
	}

	.links > *:hover {
		background-color: var(--accent-tertiary);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}

	.links > *:active {
		background-color: var(--accent-primary);
		text-decoration: none;
		transition: all 0.5s;
		color: var(--secondary);
	}

	img {
		height: 36px;
		border-radius: 50%;
	}

	div.links {
		display: flex;
		gap: 8px;
	}

	@media only screen and (max-width: 820px) {
		nav {
			flex-direction: column;
			align-items: flex-start;
		}

		div.links {
			flex-direction: column;
			margin-top: 10px;
			gap: 19px;
		}
	}
</style>

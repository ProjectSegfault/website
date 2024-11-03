<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>
	{data.title}
	<p class="text-base font-normal mt-4">{data.description}</p>
</h1>

<ul>
	<li><a href="/legal/privacy-policy">Privacy policy</a></li>
	<li><a href="/legal/tos">Terms of service</a></li>
	<li>
		<a href="https://git.projectsegfau.lt/ProjectSegfault/transparency/"
			>Transparency reports</a
		>
	</li>
</ul>

<h2>Legal FAQ</h2>

<h3>What do I do if a user is disturbing me?</h3>

<p>
	If you are being disturbed by a user on our services, then you should
	immediately contact us. You can do that by sending us an <a
		href="mailto:contact@projectsegfau.lt">email</a
	>
	or through our Matrix
	<a href="https://matrix.to/#/#support:projectsegfau.lt">support channel</a>.
	If you prefer to keep your report private on Matrix, contact one of our team
	members directly. You can find their info on our
	<a href="/team">team page</a>.
</p>

<h3>How can I trust you?</h3>

<p>
	We have a <a href="/legal/privacy-policy">privacy policy</a> which outlines how
	we collect and handle your data.
</p>

<style>
	li::before {
		content: "- ";
	}
</style>

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
	If some user of our services is disturbing you, you should immediately
	contact us. You can do that either by <a
		href="mailto:contact@projectsegfau.lt">emailing us</a
	>
	or sending us a message on
	<a href="https://matrix.to/#/#support:projectsegfau.lt"
		>the Matrix support channel</a
	>. If you prefer to keep your report private on Matrix, contact one of our
	team members. You can find their info on <a href="/team">our team page</a>.
</p>

<h3>How can I trust you?</h3>

<p>
	We have written a privacy policy, which is accessible through this website!
	You can find it <a href="/legal/privacy-policy">here</a>.
</p>

<style>
	li::before {
		content: "- ";
	}
</style>

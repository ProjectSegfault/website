<script lang="ts">
	import type { PageData } from "./$types";
	import PMargin from "$lib/PMargin.svelte";

	export let data: PageData;
</script>

<h1>{data.title}</h1>

<h2>We don't collect more information than we need to.</h2>

<PMargin class="break-all"
	>We have disabled request logging. This is because it is extremely
	identifiable. This means that, for example, what website you visited and
	what path you visited (like https://libreddit.projectsegfau.lt/r/cats), your
	IP address, your User-Agent will not be logged by us!</PMargin
>
<PMargin class="italic"
	>Some services require us to enable traffic logging, such as Nitter and
	Libreddit, This is required to prevent abuse of those proxies who have
	recently become harder and harder to proxy due to their active sabotage of
	proxies. We also log traffic from all services in order to get a better
	understanding of how much traffic we get and how we can improve our
	services. Your IP and User-Agent are not logged in this case, we only need
	to know how much traffic we get to prioritize our resources.
</PMargin>
<PMargin>
	We may occasionally log all traffic for a short period of time in order to
	prevent abuse of our services. This is only done when we detect some attack
	against our services, The logs are deleted after the attack is over.
	Information collected are: IP address, User-Agent, Request path, Request
	method, Request body, Request headers, Response status code.
</PMargin>

<PMargin
	>If you want the data we've collected on you to be sent, please contact us
	on Matrix in <a href="https://matrix.to/#/#gdpr:projectsegfau.lt"
		>this room</a
	>, or e-mail us at
	<a href="mailto:contact@projectsegfau.lt">contact@projectsegfau.lt</a>. You
	don't need an account on our Matrix instance in order to chat there, you can
	choose from a bunch of public instances or make your own.</PMargin
>

<h2>For our website and blog</h2>

<h2>
	We don't give any of the data we collect to anyone outside of Project
	Segfault.
</h2>

<PMargin
	>What we just described above won't be sold or given to anyone outside of
	Project Segfault, except for anonymous analytics like the website. Some data
	could be given to law enforcement if they have a warrant.</PMargin
>

<PMargin
	>There is no reason for anyone outside of Project Segfault to see your data.
	In fact, Project Segfault really has no reason to see your data, unless
	there's something to suspect.</PMargin
>

<h2>Data may be cleared at any point upon request, but...</h2>

<PMargin
	>There are times when we are unable to delete "your" data because we
	sometimes we do not have a concept of "you". If you don't create an account
	on the services you use, we have no way to know what data is tied to "you"
	as most logs are anonymized.</PMargin
>

<PMargin
	>Often times you can clear your own data simply by deleting your account.</PMargin
>

<PMargin
	>As we said, you can request any GDPR/Privacy things in <a
		href="https://matrix.to/#/#gdpr:projectsegfau.lt">this Matrix room</a
	>. But, if there's any ongoing investigations and a law enforcement agency
	contacts us, we will comply. But, we will only do it if we can verify it's
	official and they have a warrant.</PMargin
>

<span class="italic">Last updated 25.01.2024 15:30 UTC+1</span>

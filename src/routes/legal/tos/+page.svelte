<script lang="ts">
	import type { PageData } from "./$types";
	import PMargin from "$lib/PMargin.svelte";

	export let data: PageData;
</script>

<h1>{data.title}</h1>

<ol class="list-decimal ml-7">
	<li>
		Do not use our services to (D)DOS or attempt to disrupt someone else’s
		online stability.
	</li>
	<li class="mt-2">Do not use our services to dox someone.</li>
	<li class="mt-2">
		Do not do anything on our services that would be illegal in the
		USA, Netherlands, and India. (Example: CSAM, Loli, Drugs etc...)
	</li>
	<li class="mt-2">Do not harass people using our services.</li>
	<li class="mt-2">
		While we do try to keep your data safe, you have to acknowledge that we
		are not responsible if anything unintentional happens (such as data
		loss, inability to extract your data due to the server being down or
		something else.). It is also your responsibility to keep a backup of
		your data if it matters to you.
	</li>
	<li class="mt-2">
		The services provided by Project Segfault are provided as is. We do not
		warrant the reliability, accessibility or quality of our services and we
		are not responsible for ANY DAMAGES WHATSOEVER by using our services.
	</li>
</ol>

<PMargin
	>If you fail to comply with these terms we will terminate your access to our
	services and if you've done something illegal, report you to the police.</PMargin
>

<PMargin class="italic"
	>We will only report people to the police if they are using our services to
	do something that is morally unacceptable. We will do so without issuing any
	warnings.</PMargin
>

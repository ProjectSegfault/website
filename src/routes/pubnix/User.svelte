<script
	context="module"
	lang="ts"
>
	export type UserType = {
		name: string;
		fullName?: string;
		desc?: string;
		loc?: string;
		email?: string;
		matrix?: string;
		fediverse?: string;
		website?: string;
		capsule?: string;
		online: boolean;
		created: number;
		op: boolean;
	};
</script>

<script lang="ts">
	export let user: UserType;
	import dayjs from "dayjs";
</script>

<div
	class="flex flex-col gap-4 rounded bg-secondary p-4 w-110 no-underline text-text"
>
	<div class="flex flex-col gap-2 flex-1">
		<div>
			{#if user.fullName}
				<span class="text-2xl">{user.fullName} ({user.name})</span>
			{:else}
				<span class="text-2xl">{user.name}</span>
			{/if}
			{#if user.op}
				<span class="text-2xl"> - Admin</span>
			{/if}
		</div>
		{#if user.desc}
			<p>{user.desc}</p>
		{/if}
		{#if user.loc}
			<span class="button w-fit !bg-alt !text-text">{user.loc}</span>
		{/if}
		<span class="button w-fit !bg-alt !text-text"
			>Joined: {dayjs.unix(user.created).format("DD/MM/YYYY")}</span
		>
	</div>
	<div class="children:text-text flex flex-row items-center gap-4 text-lg">
		{#if user.email}
			<a
				href="mailto:{user.email}"
				aria-label="Email"><div class="i-ic:outline-email" /></a
			>
		{/if}

		{#if user.matrix}
			<a
				href="https://matrix.to/#/{user.matrix}"
				aria-label="Matrix"><div class="i-simple-icons:matrix" /></a
			>
		{/if}

		{#if user.fediverse}
			<a
				href="https://{user.fediverse}"
				aria-label="Fediverse"
				><div class="i-simple-icons:mastodon" /></a
			>
		{/if}

		{#if user.website}
			<a
				href={user.website}
				aria-label="Website"><div class="i-ic:outline-language" /></a
			>
		{/if}

		{#if user.capsule}
			<a
				href="https://geminiproxy.p.projectsegfau.lt/gemini/{user.capsule}"
				aria-label="Gemini"
				class="no-underline text-base">Gemini</a
			>
		{/if}
	</div>
</div>

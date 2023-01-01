<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	let announcements = data.announcements;

	import dayjs from "dayjs";
</script>

{#if announcements}
	<div class="announcements">
		<div class="flex justify-center mt-16">
			<div
				class="announcement !text-[#252525] p-6 rounded-2 w-fit flex flex-col gap-4"
			>
				<div
					class="flex gap-4 flex-col sm:flex-row border-b-2 border-b-solid p-2 pt-0"
				>
					{#if announcements.severity === "info"}
						<div class="flex items-center gap-2">
							<div class="i-fa6-solid:circle-info" />
							<span>Info</span>
						</div>
					{:else if announcements.severity === "low"}
						<div class="flex items-center gap-2">
							<div class="i-fa6-solid:check" />
							<span>Resolved</span>
						</div>
					{:else if announcements.severity === "medium"}
						<div class="flex items-center gap-2">
							<div class="i-fa6-solid:triangle-exclamation" />
							<span>Attention</span>
						</div>
					{:else if announcements.severity === "high"}
						<div class="flex items-center gap-2">
							<div class="i-fa6-solid:ban" />
							<span>Attention</span>
						</div>
					{/if}
					<span class="flex items-center gap-2">
						<div class="i-fa6-solid:user" />
						{announcements.author}
					</span>
					<span class="flex items-center gap-2">
						<div class="i-fa6-solid:calendar" />
						{dayjs
							.unix(announcements.created)
							.format("DD/MM/YYYY HH:mm")}
					</span>
				</div>

				<div class="title">
					<div class="prose">
						{@html data.content}
					</div>
				</div>

				{#if announcements.link}
					<div class="read-more">
						<a
							href={announcements.link}
							class="!text-[#252525]">Read more...</a
						>
					</div>
				{/if}
			</div>
		</div>
	</div>

	{#if announcements.severity === "info"}
		<style>
			.announcement {
				background-color: #8caaee;
			}
		</style>
	{:else if announcements.severity === "low"}
		<style>
			.announcement {
				background-color: #a6d189;
			}
		</style>
	{:else if announcements.severity === "medium"}
		<style>
			.announcement {
				background-color: #e5c890;
			}
		</style>
	{:else if announcements.severity === "high"}
		<style>
			.announcement {
				background-color: #e78284;
			}
		</style>
	{/if}
{/if}
<script lang="ts">
	export let title: string = "";
	export let position: string = "";
	export let description: string = "";
	export let icon: string = "";
	export let positionStyles: string = "";
</script>

<div class="bg-secondary rounded-2 p-4 w-[18rem] sm:w-md flex flex-col">
	<div class="flex-1 flex flex-row gap-4">
		{#if icon}
			<div>
				<img
					src={icon}
					class="h-20 rounded-2"
					alt="{title} icon"
				/>
			</div>
		{/if}
		<div>
			<span class="text-2xl font-bold">
				{title}

				{#if position}
					<span>- </span>
					<span style={positionStyles}>{position}</span>
				{/if}
			</span>

			{#if description}
				<p class="description">{description}</p>
			{/if}
		</div>
	</div>
	<slot />
</div>

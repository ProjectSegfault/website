<script lang="ts">
	import type { ActionData } from '.$/types';

	export let form: ActionData;
</script>

<div class="col">
	<h1>Post Announcement</h1>
	<form
		action="?/add"
		method="POST"
		class="col"
	>
		<select id="severity" name="severity" required>
			<option value="" selected disabled>
				Select severity of announcement
			</option>
			<option value="info">Information announcement</option>
			<option value="low">Low severity</option>
			<option value="medium">Medium severity</option>
			<option value="high">High severity</option>
		</select>
		<textarea
			name="title"
			rows="4"
			cols="25"
			placeholder="The announcement text"
		></textarea>
		<input
			type="text"
			name="link"
			placeholder="Your link for more details"
		/>
		<input type="text" name="author" placeholder="Your name" />
		{#if form?.addSuccess}
			{form.addMessage}
		{/if}

		{#if form?.addError}
			{form.addMessage}
		{/if}
		<button type="submit">Submit</button>
	</form>
	<h1 style="margin-top: 20px">Delete Announcement</h1>
	<form
		action="?/delete"
		method="POST"
		class="col"
	>
		{#if form?.deleteSuccess}
			{form.deleteMessage}
		{/if}
		<button type="submit">Delete</button>
	</form>
</div>
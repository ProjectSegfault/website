<script lang="ts">
	import type { ActionData, PageData } from '.$/types';

	export let data: PageData;
	
	export let form: ActionData;
</script>

<h1>Add post</h1>

<form action="?/add" method="POST" class="col">
	<input type="text" name="title" placeholder="Title" required />
	<textarea
		name="content"
		placeholder="Content"
		rows="4"
		cols="25"
		required
	></textarea>
	<input type="text" name="tags" placeholder="Tags" />
	<input type="text" name="author" placeholder="Author" required />
	{#if form?.addSuccess}
		{form.addMessage}
	{/if}

	{#if form?.addError}
		{form.addMessage}
	{/if}
	<button type="submit">Submit</button>
</form>

<h1>Delete post</h1>

<form action="?/delete" method="POST" class="col">
	<select name="title" required>
		{#each data.postTitles as title}
			<option value="{title}">{title}</option>
		{/each}
	</select>
	{#if form?.deleteSuccess}
		{form.deleteMessage}
	{/if}

	{#if form?.deleteError}
		{form.deleteMessage}
	{/if}
	<button type="submit">Submit</button>
</form>

<h1>Edit post</h1>

<form action="?/edit" method="POST" class="col">
	<select name="title" required>
		<option disabled>Post title</option>
		{#each data.postTitles as title}
			<option value="{title}">{title}</option>
		{/each}
	</select>
	<select name="area">
		<option disabled>Area to change</option>
		<option value="title">Title</option>
		<option value="content">Content</option>
		<option value="tags">Tags</option>
	</select>
	<input type="text" name="newTitle" placeholder="New title" />
	<textarea
		name="content"
		placeholder="New content"
		rows="4"
		cols="25"
	></textarea>
	<input type="text" name="tags" placeholder="New tags" />
	{#if form?.editSuccess}
		{form.editMessage}
	{/if}

	{#if form?.editError}
		{form.editMessage}
	{/if}
	<button type="submit">Submit</button>
</form>
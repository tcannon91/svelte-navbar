<script lang="ts">
	import Entry from './navbar-entry.svelte';
	export let entries: NavbarEntry[];
</script>

<div class="navbar">
	<slot name="logo" />
	<div class="entry-list">
		{#each entries as entry}
			<Entry {entry} />
		{/each}
	</div>
	<slot name="actionsDiv" />
</div>

<style>
	.navbar {
		width: 100%;
		position: sticky;
		display: flex;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		align-items: center;
		border-bottom: solid 1px;
	}

	.entry-list {
		margin-left: auto;
	}
</style>

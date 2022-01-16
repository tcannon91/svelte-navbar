<script lang="ts">
	export let entry: NavbarEntry;

	let titleElement: HTMLParagraphElement | HTMLAnchorElement;
	let submenuElement: HTMLDivElement;

	// set the position of the child box based on the element's position
	const setChildBoxPosition = () => {
		if (titleElement && submenuElement) {
			const titleRectangle = titleElement.getBoundingClientRect();
			const titleWidth = titleElement.clientWidth;
			const middlePosition = titleRectangle.left + titleWidth / 2;

			const submenuOffset = Math.ceil(submenuElement.clientWidth / 2);
			const newSubmenuLeft = middlePosition - submenuOffset;
			const newSubmenuTop = titleRectangle.bottom + 5;
			submenuElement.style.left = newSubmenuLeft.toString() + 'px';
			submenuElement.style.top = newSubmenuTop.toString() + 'px';
		}
	};
</script>

<div class="entry">
	{#if entry.destination}
		<a
			class="text"
			bind:this={titleElement}
			href={entry.destination}
			on:focus={setChildBoxPosition}
			on:mouseover={setChildBoxPosition}
		>
			{entry.title}
		</a>
	{:else}
		<p
			class="text"
			bind:this={titleElement}
			on:focus={setChildBoxPosition}
			on:mouseover={setChildBoxPosition}
		>
			{entry.title}
		</p>
	{/if}
	{#if entry.children}
		<div bind:this={submenuElement} class="submenu">
			<div class="spacer-box">
				<!-- <div class="arrow-up" /> -->
			</div>
			<div class="submenu-items">
				{#each entry.children as submenuEntry}
					<a class="submenu-entry" href={submenuEntry.destination}>
						{submenuEntry.title}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	* {
		color: black;
	}

	.entry {
		display: inline-block;
	}

	.text {
		display: block;
		font-size: 1rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		margin-left: 1.5rem;
		margin-right: 1.5rem;
	}

	.submenu {
		visibility: hidden;
		position: absolute;
		margin-top: -1rem;
		padding-top: 0.5rem;
	}

	.spacer-box {
		width: 100%;
		min-height: 1.5rem;
	}

	.submenu-items {
		min-width: 200px;
		min-height: 100px;
		border-radius: 8px;
		box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.33);
		padding: 1rem;
	}

	.text:hover + .submenu {
		visibility: visible;
	}
	.submenu:hover {
		visibility: visible;
	}

	.submenu-entry {
		width: 100%;
		border-bottom: solid 1px grey;
		display: block;
		text-align: center;
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
	}

	.submenu-entry:first-child {
		padding-top: 0px;
	}

	.submenu-entry:last-child {
		border-bottom: none;
		padding-bottom: 0px;
	}
</style>

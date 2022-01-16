<script lang="ts">
	import Navbar from '$lib/desktop/navbar.svelte';
	const navbarTree: NavbarEntry[] = [
		{
			title: 'Products',
			children: [
				{
					title: 'dgen',
					destination: '/products/dgen'
				},
				{
					title: 'apt',
					destination: '/products/apt'
				}
			]
		},
		{
			title: 'Solutions',
			children: [
				{
					title: 'Consulting',
					destination: '/solutions/consulting'
				},
				{
					title: 'On Demand Support',
					destination: '/solutions/on-demand-support'
				}
			]
		},
		{
			title: 'Docs & Resources',
			destination: '/docs'
		},
		{
			title: 'Pricing',
			destination: '/pricing'
		}
	];
</script>

<div>
	<Navbar entries={navbarTree}>
		<div slot="actionsDiv">
			<button>login</button>
		</div>
	</Navbar>
</div>

<style global>
	* {
		font-family: 'Inter', 'Lucida Sans', 'Lucida Sans Regular', sans-serif;
	}

	a {
		text-decoration: none;
	}

	a:visited {
		color: inherit;
	}
</style>

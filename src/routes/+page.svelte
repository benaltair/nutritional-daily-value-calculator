<script lang="ts">
	import 'simpledotcss/simple.min.css';
	import { dailyValues } from '$lib/dailyValues';
	import type { Nutrient } from 'src/lib/dailyValues';
	let dailyValuesTable: Nutrient[] = dailyValues;
</script>

<svelte:head>
	<title>Daily Value Calculator</title>
	<meta
		name="description"
		content="A simple calculator to figure out the actual amount of a nutrient on a nutritional label based on the daily value."
	/>
</svelte:head>

<header>
	<h1>Daily Value Calculator</h1>
	<p>
		Converting the percentage of <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.canada.ca/en/health-canada/services/technical-documents-labelling-requirements/table-daily-values/nutrition-labelling.html#shr-pg0"
			>daily value</a
		> from food labels in Canada
	</p>
</header>
<p>
	Enter the percentage shown on the package to see the amount calculated. This was built for
	nutritional tracking because many foods only show the percentage of the daily value, not the
	actual amount.
	<!-- Lazy way to clear the table by refreshing the page -->
	<br /><a href="/" rel="external">Clear Table</a>
</p>
<table>
	<thead>
		<tr>
			<th>Nutrient</th>
			<th>Percentage</th>
			<th>Serving</th>
			<th>Daily Total</th>
		</tr>
	</thead>
	<tbody>
		{#each dailyValuesTable as { name, key, unit, value }, i}
			<tr>
				<td>{name}</td>
				<td>
					<input
						type="number"
						bind:value={dailyValuesTable[i].percentage}
						name="percentage-{key}"
						id="{key}-input"
					/>%
				</td>
				<td>
					{#if dailyValuesTable[i].percentage}
						{Math.round(value * dailyValuesTable[i].percentage) / 100} {unit}
					{/if}
				</td>
				<td>{value} {unit}</td>
			</tr>
		{/each}
	</tbody>
</table>

<footer>
	<p>A quick project by Ben built for personal use, feel free to share</p>
</footer>

<style>
	table {
		min-width: 100%;
	}
	input {
		width: calc(100% - 2ch);
		min-width: 4ch;
	}
</style>

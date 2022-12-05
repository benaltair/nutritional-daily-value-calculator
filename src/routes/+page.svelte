<script lang="ts">
	import 'simpledotcss/simple.min.css';
	import { dailyValues } from '$lib/dailyValues';
	let dailyValuesTable = dailyValues;
</script>

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

<style>
	table {
		min-width: 100%;
	}
	input {
		width: calc(100% - 2ch);
		min-width: 4ch;
	}
</style>

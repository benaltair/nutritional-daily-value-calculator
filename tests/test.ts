import { expect, test } from '@playwright/test';
import { dailyValues } from '$lib/dailyValues';

test('index page has expected title', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Daily Value Calculator');
});

test('calculation works on first nutrient', async ({ page }) => {
	const { key, value, unit } = dailyValues[0];
	const testPercentage = 50
	const calculatedAmount = Math.round(value * testPercentage) / 100
	await page.goto('/');
	// Fill in the first nutrient with a 50% daily value
	await page.fill(`input[name="percentage-${key}"]`, testPercentage.toString());
	// Check that the first nutrient has the correct value
	expect(await page.textContent(`#${key}-value`)).toBe(`${calculatedAmount} ${unit}`);
});
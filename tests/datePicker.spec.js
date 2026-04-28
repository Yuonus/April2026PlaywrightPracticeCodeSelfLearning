
const { test, expect } = require('@playwright/test');

test.skip('Handling Date Picker -- Manual Date Entry', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.fill("input[id='datepicker']", '04/30/2026');
    // Verify the selected date
    await expect(page.locator("input[id='datepicker']")).toHaveValue('04/30/2026');
    await page.waitForTimeout(3000)
});

test.skip('Handling Date Picker -- Selecting Dates from the date picker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const day = '31';
    const month = '4';
    const year = '2027';

    await page.locator("#txtDate").click();

    // Select month (May)
    await page.locator("select[data-handler='selectMonth']").selectOption(month);

    // Select year (2027)
    await page.locator("select[data-handler='selectYear']").selectOption(year);

    // Select day
    await page.locator(`.ui-datepicker-calendar a:text-is("${day}")`).click();

    // Get selected date value
    const selectedDate = await page.locator('#txtDate').inputValue();
    // Print to console
    console.log('Selected Date:', selectedDate);

    // Verify selected date
    await expect(page.locator('#txtDate')).toHaveValue('31/05/2027');
    await page.waitForTimeout(3000)
});


test.skip('Handling Date Picker using Next/Prev buttons', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const day = '31';
    const targetMonth = 'May';
    const targetYear = '2027';

    // Get iframe
    const frame = page.frameLocator(".demo-frame");

    // Click input inside iframe
    await frame.locator("#datepicker").click();

    while (true) {
        const currentMonth = (await frame.locator(".ui-datepicker-month").textContent()).trim();
        const currentYear = (await frame.locator(".ui-datepicker-year").textContent()).trim();

        if (currentMonth === targetMonth && currentYear === targetYear) {
            break;
        }

        await frame.locator("a[title='Next']").click(); // Clicking Next arrow
    }
    // Selecting Day --- First Approach: Located the day and click on it
    // await frame.locator(`//a[text()='${day}']`).click();
    // // await frame.locator("//a[text()='31']").click(); // <--- Or, but the above approach is recommended

    // // Verification and printing the selected date into the console
    // const selectedDate = await frame.locator("#datepicker").inputValue();
    // console.log("Selected Date:", selectedDate);
    // await expect(frame.locator("#datepicker")).toHaveValue("05/31/2027");

    // 2nd Approach: Storing all days in an array and then clicking the desired day
    const allDays = frame.locator(".ui-datepicker-calendar a");

    const count = await allDays.count();

    for (let i = 0; i < count; i++) {
        const text = await allDays.nth(i).textContent();

        if (text === day) {
            await allDays.nth(i).click();
            break;
        }
    }

    // Verification
    const selectedDate = await frame.locator("#datepicker").inputValue();
    console.log("Selected Date:", selectedDate);

    await expect(frame.locator("#datepicker")).toHaveValue("05/31/2027");


    await page.waitForTimeout(3000);
});

// Handling Prev --- Bonus Part
test('Handling Date Picker using Prev buttons', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const day = '15';
    const targetMonth = 'May';
    const targetYear = '2022';

    // Get iframe
    const frame = page.frameLocator(".demo-frame");

    // Click input inside iframe
    await frame.locator("#datepicker").click();

    while (true) {
        const currentMonth = (await frame.locator(".ui-datepicker-month").textContent()).trim();
        const currentYear = (await frame.locator(".ui-datepicker-year").textContent()).trim();

        if (currentMonth === targetMonth && currentYear === targetYear) {
            break;
        }

        await frame.locator("a[title='Prev']").click(); // Clicking Prev arrow
    }

    const allDays = frame.locator(".ui-datepicker-calendar a");

    const count = await allDays.count();

    for (let i = 0; i < count; i++) {
        const text = await allDays.nth(i).textContent();

        if (text === day) {
            await allDays.nth(i).click();
            break;
        }
    }

    // Verification
    const selectedDate = await frame.locator("#datepicker").inputValue();
    console.log("Selected Date:", selectedDate);

    await expect(frame.locator("#datepicker")).toHaveValue("05/15/2022");


    await page.waitForTimeout(3000);
});






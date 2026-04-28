
const { test, expect } = require('@playwright/test');

test('Web Table handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);
    const table = page.locator('#productTable'); // Locating the table
    // Finding total numbers of rows and columns
    const columns = page.locator('#productTable>thead>tr>th');
    console.log('Number of columns Headers are:', await columns.count());

    const rows = page.locator('#productTable>tbody>tr');
    console.log('Number of total rows:', await rows.count());

    // Verification
    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    // Selecting the Product 4
    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch',
    // });

    // The filter can be simplified (No need for has: page.locator('td').)
    const matchedRow = rows.filter({ hasText: 'Smartwatch' });
    await matchedRow.locator('input').check();
    await expect(matchedRow.locator('input')).toBeChecked();
    // Printing the product name to the console
    const productName = (await matchedRow.locator('td').nth(1).textContent()).trim();
    console.log(`The selected product name is: ${productName}`);

    await page.waitForTimeout(3000);
    // Uncheck it
    await matchedRow.locator('input').uncheck();
    await expect(matchedRow.locator('input')).not.toBeChecked();
    await page.waitForTimeout(2000);

    // Multiple Product Selection with a re-usable function
    await selectProduct(rows, page, 'Smartphone');
    await selectProduct(rows, page, 'Wireless Earbuds');
    await selectProduct(rows, page, '	Tablet');

    // Print ALL selected products if you don't want to use the print from the utilitly method below
    // for (let i = 0; i < await rows.count(); i++) {
    //     const row = rows.nth(i);
    //     const checkbox = row.locator('input');

    //     if (await checkbox.isChecked()) {
    //         const name = (await row.locator('td').nth(1).textContent()).trim();
    //         console.log(`The selected product is: ${name}`);
    //     }
    // }

    console.log('----------------------------------------------------------------------------');
    console.log('Printing the products ID, Name, and Price from the first page of the table');
    // Printing the products ID, Name, and Price from the first page of the table 
    for (let i = 0; i < await rows.count(); i++) { // Outer loop for handling rows
        const row = rows.nth(i);
        const tds = row.locator('td');
        for (let j = 0; j < await tds.count() - 1; j++) { // Inner loop for handling columns
            console.log(await tds.nth(j).textContent());
        }
    }

    console.log('----------------------------------------------------------------------------');
    // Handling Pagination: Printing the products ID, Name, and Price from the whole table 
    const tablePagesCount = page.locator('#pagination li a');
    console.log('Number of total pages in the table are:', await tablePagesCount.count());
    console.log('Total pages:', await tablePagesCount.count());
    await expect(tablePagesCount).toHaveCount(4);

    for (let p = 0; p < await tablePagesCount.count(); p++) {
        // 👉 PRINT PAGE HEADER (NEW)
        console.log('\n====================================================');
        console.log(`📄 Navigating to Page: ${p + 1}`);
        console.log('====================================================');

        // Since the first page is already visible, we don’t need to click it. We can skip clicking the first page by adding a check to bypass it.
        if (p > 0) {
            await tablePagesCount.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) { // Outer loop for handling rows
            const row = rows.nth(i);
            const tds = row.locator('td');
            for (let j = 0; j < await tds.count() - 1; j++) { // Inner loop for handling columns
                console.log(await tds.nth(j).textContent());
            }
        }
        await page.waitForTimeout(2000);
    }



});

// Re-usable function for multi product selection
async function selectProduct(rows, page, productName) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: productName,
    });
    await matchedRow.locator('input').check();
    // Verify selection immediately
    await expect(matchedRow.locator('input')).toBeChecked();
    // printing each selected product name into the console
    const name = (await matchedRow.locator('td').nth(1).textContent()).trim();
    console.log(`Selected product inside function: ${name}`);

    await page.waitForTimeout(1500); // This Static wait is added to see each product selection in the span of 1.5 seconds
}


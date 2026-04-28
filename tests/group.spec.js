
// First step tests before grouping:
// import { test, expect } from '@playwright/test';
// console.log('Running Tests in without Groups');
// test('First Test', async ({ page }) => {
//     console.log('This is the result of my First Test');
// });

// test('Second Test', async ({ page }) => {
//     console.log('This is the result of my Second Test');
// });

// test('Third Test', async ({ page }) => {
//     console.log('This is the result of my Third Test');
// });

// test('Fourth Test', async ({ page }) => {
//     console.log('This is the result of my Fourth Test');
// });

// // 2nd Step --- Using Grouping 
// const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';

// console.log('Running Tests in Groups');

// test.describe('Group 1 Test Blocks', () => {
//     test('First Test', async ({ page }) => {
//         console.log('This is the result of my First Test');
//     });

//     test('Second Test', async ({ page }) => {
//         console.log('This is the result of my Second Test');
//     });
// });

// test.describe('Group 2 Test Blocks', () => {
//     test('Third Test', async ({ page }) => {
//         console.log('This is the result of my Third Test');
//     });

//     test('Fourth Test', async ({ page }) => {
//         console.log('This is the result of my Fourth Test');
//     });
// });

// // Third Step  -- Using Hooks and Grouping together
// import { test, expect } from '@playwright/test';

// test.beforeAll(async () => {
//     console.log('This is beforeAll hook ...');
// });
// test.afterAll(async () => {
//     console.log('This is afterAll hook ...');
// });
// test.beforeEach(async () => {
//     console.log('This is beforeEach hook ...');
// });
// test.afterEach(async () => {
//     console.log('This is afterEach hook ...');
// });


// console.log('Running Tests using Hooks and Groups');

// test.describe('Group 1 Test Blocks', () => {
//     test('First Test', async ({ page }) => {
//         console.log('This is the result of my First Test');
//     });

//     test('Second Test', async ({ page }) => {
//         console.log('This is the result of my Second Test');
//     });
// });

// test.describe('Group 2 Test Blocks', () => {
//     test('Third Test', async ({ page }) => {
//         console.log('This is the result of my Third Test');
//     });

//     test('Fourth Test', async ({ page }) => {
//         console.log('This is the result of my Fourth Test');
//     });
// });

// Fourth Step: Adding only and skip modifiers
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('This is beforeAll hook ...');
});
test.afterAll(async () => {
    console.log('This is afterAll hook ...');
});
test.beforeEach(async () => {
    console.log('This is beforeEach hook ...');
});
test.afterEach(async () => {
    console.log('This is afterEach hook ...');
});


console.log('Running Tests using Hooks and Groups');

test.describe('Group 1 Test Blocks', () => {
    test('First Test', async ({ page }) => {
        console.log('This is the result of my First Test');
    });

    test('Second Test', async ({ page }) => {
        console.log('This is the result of my Second Test');
    });
});

test.describe.only('Group 2 Test Blocks', () => {
    test('Third Test', async ({ page }) => {
        console.log('This is the result of my Third Test');
    });

    test('Fourth Test', async ({ page }) => {
        console.log('This is the result of my Fourth Test');
    });

});







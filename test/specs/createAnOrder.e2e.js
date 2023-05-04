const page = require('../../page');
const helper = require('../../helper')

// describe('Create an order', () => {
//     it('should open phone number modal', async () => {
//         await browser.url(`/`)
//         await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
//         const phoneNumberButton = await $(page.phoneNumberButton);
//         await phoneNumberButton.waitForDisplayed();
//         await phoneNumberButton.click();
//         const pnoneNumberModal = await $(page.phoneNumberModal);
//         await expect(pnoneNumberModal).toBeExisting();
//     })

//     it('should save the phone', async () => {
//         await browser.url(`/`)
//         await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
//         const phoneNumber = helper.getPhoneNumber("+1");
//         await page.submitPhoneNumber(phoneNumber);
//         await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
//     })
// })


describe('Ordering a taxi', () => {
    it('Setting the address', async () => {
        await browser.url(`/`)
        await page.fillAddressesOnly('East 2nd Street, 601', '1300 1st St');
        const carPickerworkflow = await $(page.carPickerworkflow);
        //Checking if the workflow-subcontainer Form appears if the address is valid 
        await expect(carPickerworkflow).toBeExisting(); 
    })
    
    it('Selecting Supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const SupportiveButton = await $(page.supportiveButton);
        await SupportiveButton.waitForDisplayed();
        await SupportiveButton.click();
        await expect(SupportiveButton).toBeExisting(); 
        //await browser.pause(10000);

    })
})


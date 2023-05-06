const page = require('../../page');
const helper = require('../../helper')

describe('Ordering a taxi', () => {
    // it('Setting the address', async () => {
    //     await browser.url(`/`)
    //     await page.fillAddressesOnly('East 2nd Street, 601', '1300 1st St');
    //     const carPickerworkflow = await $(page.carPickerworkflow);
    //     //Checking if the workflow-subcontainer Form appears if the address is valid 
    //     await expect(carPickerworkflow).toBeExisting(); 
        
    // })

    // it('Selecting Supportive plan', async () => {
    //     await browser.url(`/`)
    //     await browser.pause(4000);
    //     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    //     const SupportiveButton = await $(page.supportiveButton);
    //     await SupportiveButton.waitForDisplayed();
    //     await SupportiveButton.click();
    //     await expect(SupportiveButton).toBeExisting(); 
    //    // await browser.pause(2000);

    // })

    // it('Filling in the phone number', async () => {
    //     await browser.url(`/`)
    //     await browser.pause(4000);
    //     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    //     const phoneNumber = helper.getPhoneNumber("+1");
    //     await page.submitPhoneNumber(phoneNumber);
    //     await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    // })
            
    it('Adding a credit card', async () => {
        await browser.url(`/`)
        await browser.pause(4000);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const creditCard = helper.getCreditCard();
        const cardCode = helper.getCardCode();
        await page.fillPayment(creditCard, cardCode);
        await browser.pause(8000);     
    })
    // it('Writing a message for the driver', async () => {
    //     await browser.url(`/`)
    //     await browser.pause(4000);
    //     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    //     const userComment = "I'm wearing a red shirt"
    //     await page.fillComment(userComment); 
    //     await page.clickBlanket();
    //     await browser.pause(8000);

    // })


})


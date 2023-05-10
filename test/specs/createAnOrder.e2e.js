const page = require('../../page');
const helper = require('../../helper')

describe('Order a taxi', () => {
//   it('Should Set the address', async () => {
//         await browser.url(`/`) 
//         await page.fillAddressesOnly('East 2nd Street, 601', '1300 1st St');
//         const carPickerModal = await $(page.carPickerModal);
//         //Checking if the workflow-subcontainer Form appears if the address is valid 
//         await expect(carPickerModal).toBeDisplayed();  
        
//     })

    // it('Should Select the Supportive plan option', async () => {
    //     await browser.url(`/`)
    //     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    //     await page.SelectSupportivePlan();
    //     const supportiveButtonActive = await $(page.supportiveButtonActive);
    //     //Checking if the support button is selected in the UI
    //     await expect(supportiveButtonActive).toBeExisting();
    //     await browser.pause(2000);  
    // })

    // it('Should add a phone number', async () => {
    //     await browser.url(`/`)
    //     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    //     await page.SelectSupportivePlan();
    //     const phoneNumber = helper.getPhoneNumber("+1");
    //     await page.submitPhoneNumber(phoneNumber);
    //     //Checking if phone number exists in the div element
    //     await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    //     //await browser.pause(2000);
    // })
            
    // it('Should add a credit card', async () => {
    //     await browser.url(`/`)
    //     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    //     await page.SelectSupportivePlan();
    //     const creditCard = helper.getCreditCard();
    //     const cardCode = helper.getCardCode();
    //     await page.fillPayment(creditCard, cardCode);  
    //     const cardActive = await $(page.cardActive);
    //     //Checking if the card input id locator does exist after registering the credit card 
    //     await expect(cardActive).toBeExisting();
    //     await browser.pause(2000);
    // })
    // it('Should write a meessage to driver', async () => {
    //     await browser.url(`/`)
    //     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    //     await page.SelectSupportivePlan();
    //     const userComment = "I am wearing a red shirt";  
    //     await page.fillComment(userComment);     
    //     const commentSaved = await $(page.commentSaved);
    //     //Checking if the comments value locator exists after writing the comment
    //     await expect(commentSaved).toBeExisting();
    //     await browser.pause(2000);
    // })
    // it('Should order Blanket and Handkerchiefs', async () => {
    //     await browser.url(`/`)
    //     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    //     await page.SelectSupportivePlan();
    //     await page.selectBlanketHandkerchiefs();
        
    // })
    it('Should order 2 Ice Creams ', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.SelectSupportivePlan();
        await expect($('//div[@class="counter-value" and contains(text(),"2")]')).toBeExisting();  
        await page.orderIceCream(); 
       
        await browser.pause(2000);
    })
    // it('Should open car search modal ', async () => {
    //     await browser.url(`/`)
    //     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    //     const phoneNumber = helper.getPhoneNumber("+1");  //generates a random 10 digit phone number 
    //     await page.submitPhoneNumber(phoneNumber);     //sends phone number to the function to register the number
    //     await expect(await helper.getElementByText(phoneNumber)).toBeExisting();  //see if phone number exists in the div element
    //     const creditCard = helper.getCreditCard();  //generates a random 12 digit credit card number
    //     const cardCode = helper.getCardCode(); //generates a random 2 digit code number
    //     await page.fillPayment(creditCard, cardCode); //sends card details to the function to register the card
    //     const userComment = "I'm wearing a red shirt";     
    //     await page.fillComment(userComment);    //sends the comment to the function to send to driver 
    //     await page.selectBlanketHandkerchiefs();   //selects the Blanket and Handkerchiefs option 
    //     await page.orderIceCream();            // orders two IceCream 
    //     await page.orderTaxi();               // submits taxi order 

    // })

})


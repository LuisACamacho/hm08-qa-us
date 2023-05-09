const page = require('../../page');
const helper = require('../../helper')

describe('Ordering a taxi', () => {
  
    it('Writing a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); //fills address ,selects taxi serivce, and selects supportive class option
        const phoneNumber = helper.getPhoneNumber("+1");  //generates a random 10 digit phone number 
        await page.submitPhoneNumber(phoneNumber);     //sends phone number to the function to register the number
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();  //see if phone number exists in the div element
        const creditCard = helper.getCreditCard();  //generates a random 12 digit credit card number
        const cardCode = helper.getCardCode(); //generates a random 2 digit code number
        await page.fillPayment(creditCard, cardCode); //sends card details to the function to register the card
        const userComment = "I'm wearing a red shirt";     
        await page.fillComment(userComment);    //sends the comment to the function to send to driver 
        await page.clickBlanket();              //selects the Blanket and Handkerchiefs option 
        await page.orderIceCream();            // orders two IceCream 
        await page.orderTaxi();               // submits taxi order 
        

    })


})


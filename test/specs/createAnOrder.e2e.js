const page = require('../../page');
const helper = require('../../helper')

describe('Ordering a taxi', () => {
  
    it('Writing a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const creditCard = helper.getCreditCard();
        const cardCode = helper.getCardCode();
        await page.fillPayment(creditCard, cardCode);
        const userComment = "I'm wearing a red shirt"
        await page.fillComment(userComment); 
        await page.clickBlanket();
        await page.orderIceCream();
        await page.orderTaxi(); 
        

    })


})


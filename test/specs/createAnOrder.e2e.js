const page = require('../../page');
const helper = require('../../helper')

describe('Order a taxi', () => {
  it('Should Set the address', async () => {
        await browser.url(`/`) 
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const carPickerModal = await $(page.carPickerModal);
        //Checking if the workflow-subcontainer Form appears if the address is valid 
        await expect(carPickerModal).toBeDisplayed();  
        
    })

    it('Should Select the Supportive plan option', async () => {
        await browser.url(`/`)
        await page.selectTaxi('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const supportiveButtonActive = await $(page.supportiveButtonActive);
        //Checking if the support button is selected in the UI
        await expect(supportiveButtonActive).toBeExisting(); 
    })

    it('Should add a phone number', async () => {
        await browser.url(`/`)
        await page.selectTaxi('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1"); //generates a random 10 digit phone number 
        await page.submitPhoneNumber(phoneNumber);
        //Checking if phone number exists in the div element
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting(); //Checks if phone number exists in the div element
        
    })
            
    it('Should add a credit card', async () => {
        await browser.url(`/`)
        await page.selectTaxi('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const creditCard = helper.getCreditCard(); //generates a random 12 digit credit card number
        const cardCode = helper.getCardCode();  //generates a random 2 digit code number
        await page.fillPayment(creditCard, cardCode);  
        const cardActive = await $(page.cardActive);
        //Checking if the card input id locator does exist after registering the credit card 
        await expect(cardActive).toBeExisting();
    })
    it('Should write a meessage to driver', async () => {
        await browser.url(`/`)
        await page.selectTaxi('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const userComment = "I am wearing a red shirt";  
        await page.fillComment(userComment);     
        const commentSaved = await $(page.commentSaved);
        //Checking if the comments value locator exists after writing the comment
        await expect(commentSaved).toBeExisting();
    })
    it('Should order Blanket and Handkerchiefs', async () => {
        await browser.url(`/`)
        await page.selectTaxi('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        await page.selectBlanketHandkerchiefs();
        
    })
    it('Should order 2 Ice Creams ', async () => {
        await browser.url(`/`)
        await page.selectTaxi('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        await page.orderIceCream(); 
        const icecreamAdded = await $(page.icecreamAdded);
        //Checking if the Ice Cream has been added twice in the UI  
        await expect(icecreamAdded).toBeExisting(); 
    })
    it('Should open car search modal ', async () => {
        await browser.url(`/`)
        await page.selectTaxi('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");   
        await page.submitPhoneNumber(phoneNumber);     
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();  
        const creditCard = helper.getCreditCard();  
        const cardCode = helper.getCardCode(); 
        await page.fillPayment(creditCard, cardCode); 
        const userComment = "I'm wearing a red shirt";     
        await page.fillComment(userComment);     
        await page.selectBlanketHandkerchiefs();    
        await page.orderIceCream();          
        await page.orderTaxi();  
        const carsearchModal = await $(page.carsearchModal);
        // Checking if the Car Search modal appears 
        await expect(carsearchModal).toBeDisplayed();        

    })
    it('Should display the driver info', async () => {
        await browser.url(`/`)
        await page.selectTaxi('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");   
        await page.submitPhoneNumber(phoneNumber);     
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();  
        const creditCard = helper.getCreditCard();  
        const cardCode = helper.getCardCode(); 
        await page.fillPayment(creditCard, cardCode); 
        const userComment = "I'm wearing a red shirt";     
        await page.fillComment(userComment);     
        await page.selectBlanketHandkerchiefs();    
        await page.orderIceCream();          
        await page.orderTaxi();  
        await page.driverInfo();
        const driverSelected = await $(page.driverSelected);
        // Checking if the driver info  appears after car search modal
        await expect(driverSelected).toBeDisplayed(); 
       
    
    })



})


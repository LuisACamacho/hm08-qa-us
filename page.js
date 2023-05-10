module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardField: '#number',
    cardCodeField: '[name="code"]',
    commentField: '#comment',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: 'div*=Phone number',
    supportiveButton: 'div*=Supportive',
    paymentButton: '.pp-text',  
    addCardButton: 'div*=Add card',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    linkButton: 'button=Link',
    blanketButton: '//span [@class = "slider round"]',
    iceCreamAddButton: '.counter-plus',
    orderButton: 'button.smart-button',
    closeButton: 'div[class="payment-picker open"] button[class="close-button section-close"]',
    //Active locators
    supportiveButtonActive: 'div[class="tcard active"] button[data-for="tariff-card-4"]',
    cardActive: 'input[id="card-1"]',
    commentSaved: 'input[value="I am wearing a red shirt"]',
    icecreamAdded: '//div[@class="counter-value" and contains(text(),"2")]',
    driverSelected: 'div[class="order-number"]',
    orderTimer: 'div[class="order-header-time"]',
    
    // Modals 
    phoneNumberModal: '.modal',
    carsearchModal: '.order.shown',
    carPickerModal: '.type-picker.shown',
    cardModal: '.pp-buttons',

    
   
    // Functions
    fillAddresses: async function(from, to) {   //  setting the address
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        
        
    },
    selectTaxi: async function(from, to) {    // Selecting taxi services
        await this.fillAddresses(from ,to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    selectSupportivePlan: async function(){ //Selecting Supportive plan option
        const SupportiveButton = await $(this.supportiveButton);
        await SupportiveButton.waitForDisplayed();
        await SupportiveButton.click();
        
    },
    fillPhoneNumber: async function(phoneNumber) {  // Adding a phone number
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {  // getting SMS code to register the phone number
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause 
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        await codeField.waitForDisplayed();
        const requests = await browser.getRequests();
        // use first response
        // add check that we have only one response
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },

    fillPayment: async function(creditCard, cardCode) { // Adding a credit card for payment
        const paymentmethodButton = await $(this.paymentButton);
        await paymentmethodButton.waitForDisplayed();
        await paymentmethodButton.click();
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const cardField = await $(this.cardField);
        await cardField.setValue(creditCard);
        const CardcodeField = await $(this.cardCodeField);
        await CardcodeField.setValue(cardCode);
        const cardform = await $(this.cardModal);
        await cardform.waitForDisplayed();
        await cardform.click();
        const LinkButton = await $(this.linkButton);
        await LinkButton.waitForDisplayed();
        await LinkButton.click();
        const CloseButton = await $(this.closeButton);
        await CloseButton.click();
        
        
    },
    fillComment: async function(userComment) {   // Writing a message for the driver
        const commentField = await $(this.commentField);
        await commentField.setValue(userComment);
    },
    selectBlanketHandkerchiefs: async function() {    //  Ordering a Blanket and Handkerchiefs
        const blanketButton = await $(this.blanketButton);
        await blanketButton.waitForDisplayed();
        await blanketButton.click();
    },
    orderIceCream: async function(){  //Ordering 2 ice creams 
        const icecreamAddButton = await $(this.iceCreamAddButton);
        await icecreamAddButton.waitForDisplayed();
        await icecreamAddButton.click();
        await icecreamAddButton.click();

    },
    orderTaxi: async function(){  //Displays the car search modal 
        const orderButton = await $(this.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        

    },
    driverInfo: async function(){  //Displays the driver info 
        const c = await $(this.orderTimer).getText(); //get the estimated time of waiting from car search modal 
        var time = c;   
        var a = time.split(':'); // split string at the colons
        var seconds = a[1];    //get only the part of the string that is in seconds   ex: 00:32
        const timer = 1000+parseInt(seconds)*1000; // convert string into int , than convert seconds to miliseconds 
        const driverSelected = await $(this.driverSelected); 
        await driverSelected.waitForDisplayed({timeout: timer}); // wait for time for driver info to be visible on the page
    },

};
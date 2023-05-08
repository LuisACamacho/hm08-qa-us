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
    addcardButton: 'div*=Add card',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    linkButton: 'button=Link',
    cardformtouch: '.pp-buttons',
    blanketButton: '//span [@class = "slider round"]',
    iceCreamaddButton: '.counter-plus',
    orderButton: 'button.smart-button',
    closeButton: 'div[class="payment-picker open"] button[class="close-button section-close"]',
    // Modals
    phoneNumberModal: '.modal',
    carPickerModal: '.workflow-subcontainer',
    carsearchModal: '.order-body',
   
    // Functions
    fillAddressesOnly: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const carPickerModal = await $(this.carPickerModal);
        await expect(carPickerModal).toBeExisting();
        
        
    },
    fillAddresses: async function(from, to) {
        await this.fillAddressesOnly(from ,to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
        const SupportiveButton = await $(this.supportiveButton);
        await SupportiveButton.waitForDisplayed();
        await SupportiveButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
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

    fillPayment: async function(creditCard, cardCode) {
        const paymentmethodButton = await $(this.paymentButton);
        await paymentmethodButton.waitForDisplayed();
        await paymentmethodButton.click();
        const addcardButton = await $(this.addcardButton);
        await addcardButton.waitForDisplayed();
        await addcardButton.click();
        const cardField = await $(this.cardField);
        await cardField.setValue(creditCard);
        const CardcodeField = await $(this.cardCodeField);
        await CardcodeField.setValue(cardCode);
        const cardform = await $(this.cardformtouch);
        await cardform.waitForDisplayed();
        await cardform.click();
        const LinkButton = await $(this.linkButton);
        await LinkButton.waitForDisplayed();
        await LinkButton.click();
        const CloseButton = await $(this.closeButton);
        await CloseButton.click();
        
    },
    fillComment: async function(userComment) {
        const commentField = await $(this.commentField);
        await commentField.setValue(userComment);
    },
    clickBlanket: async function() {
        const blanketButton = await $(this.blanketButton);
        await blanketButton.waitForDisplayed();
        await blanketButton.click();
        
        
    },
    orderIceCream: async function(){
        const icecreamaddButton = await $(this.iceCreamaddButton);
        await icecreamaddButton.waitForDisplayed();
        await icecreamaddButton.click();
        await icecreamaddButton.click();

    },
    orderTaxi: async function(){
        const orderButton = await $(this.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const carsearchModal = await $(this.carsearchModal);
        await expect(carsearchModal).toBeExisting();
     
    },

};
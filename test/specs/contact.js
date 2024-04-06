import contactPage from '../pages/contactPage';

describe('click contact button, fill details and assert the message', () => {

    it('open url and click contact button', async() => {

        // open url
        await contactPage.open();

        //click contact button
        const contactButton = await contactPage.contactButton;
        await contactButton.click();

        await contactPage.submitForm("Krupa", "rskrupasree2001@gmail.com", "9952780076", "Went well");

        // assert the success message
        await browser.waitUntil( async function(){
            var successMessage = await contactPage.successMessage.getText();
            return successMessage === "Thanks for contacting us! We will be in touch with you shortly";
            },{
                timeoutMsg: "The text is not there"
            });
        const successMessage = await contactPage.successMessage;

        //just for debugging we can use console.log
        // console.log(await $("//*[@role='alert1']"));
        
        await expect(successMessage).toHaveText("Thanks for contacting us! We will be in touch with you shortly");
    
    });
});
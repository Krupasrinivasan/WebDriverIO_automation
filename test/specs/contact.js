describe('click contact button, fill details and assert the message', () => {

    it('open url and click contact button', async() => {

        // open url
        await browser.url('https://practice.sdetunicorns.com/');

        //click contact button
        const contactButton = await $("//*[@id='menu-item-493']");
        await contactButton.click();

        //fill the form
        const name = await $("//*[@id='evf-277-field_ys0GeZISRs-1']");
        await name.addValue("Krupa");

        const email = await $("//*[@id='evf-277-field_LbH5NxasXM-2']");
        await email.addValue("rskrupasree2001@gmail.com");

        const phone = await $("//*[@id='evf-277-field_66FR384cge-3']");
        await phone.addValue("9952780076");

        const message = await $("//*[@id='evf-277-field_yhGx3FOwr2-4']");
        await message.addValue("Went well");

        //click submit button
        await $("//*[@type='submit'][@name='everest_forms[submit]']").waitForClickable();
        const submitButton = (await $("//*[@type='submit'][@name='everest_forms[submit]']"));
        await submitButton.click();

        // assert the success message
        await browser.waitUntil( async function(){
            var successMessage = (await $("//*[@role='alert']").getText());
            return successMessage === "Thanks for contacting us! We will be in touch with you shortly";
            },{
                timeoutMsg: "The text is not there"
            });
        const successMessage = await $("//*[@role='alert']");

        //just for debugging we can use console.log
        // console.log(await $("//*[@role='alert1']"));
        
        await expect(successMessage).toHaveText("Thanks for contacting us! We will be in touch with you shortly");
    
    });
});
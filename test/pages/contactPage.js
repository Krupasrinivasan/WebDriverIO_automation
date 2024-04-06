class contactPage{
    async open(){
        await browser.url('https://practice.sdetunicorns.com/');
    }

    get contactButton(){
        return $("//*[@id='menu-item-493']");
    }

    get name(){
        return $("//*[@id='evf-277-field_ys0GeZISRs-1']");
    }

    get email(){
        return $("//*[@id='evf-277-field_LbH5NxasXM-2']");
    }

    get phone(){
        return $("//*[@id='evf-277-field_66FR384cge-3']");
    }

    get message(){
        return $("//*[@id='evf-277-field_yhGx3FOwr2-4']");
    }

    get submitButton(){
        return  $("//*[@type='submit'][@name='everest_forms[submit]']");
    }

    get successMessage(){
        return $("//*[@role='alert']");
    }

    async submitForm(name, email, phone, message){
        await this.name.addValue(name);
        await this.email.addValue(email);
        await this.phone.addValue(phone);
        await this.message.addValue(message);
        await this.submitButton.click();
    }
}
export default new contactPage();
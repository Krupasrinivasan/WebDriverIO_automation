export const waitForTextChange = (el,text,timeout) =>{

    browser.waitUntil(
        function(){
            return el.getText() === text;
        },{timeout}
    );

};

export const waitAndClick = async(el,timeout)=>{

    await (await el).waitForDisplayed({timeout});
        await (await el).click();
}
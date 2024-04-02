const path = require('path');
const { removeListener } = require('process');

//upload file
describe('Click upload button annd upload files', ()=>{

    it('testcase for upload file', async()=>{
        await browser.url('https://the-internet.herokuapp.com/upload');

        //__dirname returns our creent file path which is /Users/krupa.srinivasan/Projects/WebdriverIO/test/specs/upload.js
        const filePath = path.join(__dirname,'../data/pic.jpeg');

        //upload test file to the chromedriver
        const remoteFile = await browser.uploadFile(filePath);

        await $('#file-upload').setValue(remoteFile);
        await $('#file-submit').click();

        //assertion
        const succesMessage = await (await $('//*[@id="content"]/div/h3')).getText();
        await expect(succesMessage).toEqual('File Uploaded!');
        
    
    });

    it('Hidden Upload file button', async()=> {


        await browser.url('https://practice.sdetunicorns.com/cart/');

        const filePath = path.join(__dirname,'../data/pic.jpeg');
        const remoteFile = await browser.uploadFile(filePath);

        //this will execute the command which will unhide the upload file input button
        await browser.execute("document.querySelector('#upfile_1').className = ''");

        await $("#upfile_1").setValue(remoteFile);
        await $("#upload_1").click();

        //assertion
        const succesMessage = await (await $('#wfu_messageblock_header_1_label_1')).getText();
        expect(succesMessage).toHaveTextContaining('uploaded successfully');
    });

    it.only('open url with IFrame', async() =>{

        await browser.url('https://practice-automation.com/iframes/');

        //access the iframe
        const iframe = await $('#frame1');

        //switch to iframe
        await browser.switchToFrame(iframe);
        await expect($('#Layer_1')).toExist();

        //switch to parent frame
        await browser.switchToParentFrame();
        const title = await $("h1[itemprop='headline']").getText();
        expect(title).toEqual("Iframes");

       
    })
})
//Home | Practice Automation
//https://practice-automation.com/
describe('Home', async() => {

    it('Open url and assert title', async() => {

        //open url
        await browser.url('https://practice-automation.com/');

        //Assert title
        await expect(browser).toHaveTitle('Home | Practice Automation');

    });

    it('Open another url and assert url', async() => {

        //open url
        await browser.url('https://practice.sdetunicorns.com/about/');

        //assert url
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

    it('Click get started button', async() => {

        //Open teh home page
        await browser.url('https://practice.sdetunicorns.com/');

        //Click get started button
        await $('#get-started').click();

        //Assert url
        await expect(browser).toHaveUrlContaining('get-started');
    });

    it('Click logo and assert url does not contain get started text', async() => {

        //Open teh home page
        await browser.url('https://practice.sdetunicorns.com/');
        
        //click and Assert url does not conatian get started text
        await $('//img[@alt="Practice E-Commerce Site"]').click();

        await expect(browser).not.toHaveUrlContaining('get-started');

        //Find heading element and assert text
        const heading = await $('//h1[contains(@class,"elementor-heading-title")]');

        const headingText = await heading.getText();

        await expect(headingText).toEqual('Think different. Make different.');

        //get all items in menu
        const expectedMenuItems = ["Home", "About", "Shop", "Blog", "Contact", "My Account"];

        const actualMenuItems = [];
         
        const menuItems = await $$('#zak-primary-menu li[id*="menu"]');

        for(const menus of menuItems){

            actualMenuItems.push(await menus.getText());
        }

        await expect(actualMenuItems).toEqual(expectedMenuItems);
        });
});

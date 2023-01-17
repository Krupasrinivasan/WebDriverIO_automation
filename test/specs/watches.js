import watchPage from "../pages/watchPage";
import { expect as expectChai } from 'chai'
import { waitAndClick } from "../utility/helper";
import parameters from "../resources/parameters";
describe('Watches page',()=>{

    before('should run before all tests',async()=>{

        await watchPage.open();
    });

    it('should show the banner container',async () => {

        await expect(watchPage.banner).toBeDisplayed();
    });

    it('should contain the title', async() => {

       
        const bool = true;
        if(expect(watchPage.bannerTitle).toHaveText('Up to 40% OFF. Kick off the year with new tech!'))
        {
            expect(bool).toBe(true);
        }
        else if (expect(watchPage.bannerTitle).toHaveText('Have you been selling on eBay already?')) 
        {

            expect(bool).toBe(true);            
        } 
        else 
        {
            bool = false;
            expect(bool).toBe(true);
        }
    //    await expect(bannerTitle).toHaveText('Have you been selling on eBay already?');
       await expect(watchPage.bannerTitle).not.toBeNull();
    });

    it('should have link containing and verify its clickable', async() => {

        const tag = await watchPage.linkButton.getTagName();
        // console.log("----------------------"+tag+"------------------------------------------------------");
        await expect(watchPage.linkButton).toBeClickable();
        await expect(watchPage.linkButton).toHaveLinkContaining('delstats');
        await expect(tag).toEqual('a');
    });

    it('should click on the linkbutton and verify url', async() => {

        await watchPage.linkButton.click();   
        const bool = true;     

    //     const url = browser.getUrl();
    //    await chai.expect(url).to.eventually.include('/seller-center/');
       
        if(expect(browser).toHaveUrlContaining('https://sellglobal.ebay.in/seller-center/'))
        {
            expect(bool).toBe(true);
        }
        else if(expect(browser).toHaveUrlContaining("https://www.ebay.com/e/row/laptops-netbooks-apac?preview=true&_trkparms=%26clkid%3D6621612807062739594"))
        {
            expect(bool).toBe(true);
        }
        else
        {
            bool = false;
            expect(bool).toBe(true);
        }
    });

    it('should verify watch category list',async () => {
        
       await watchPage.openWatchCategoryPage();
        console.log(await watchPage.getCategoryList());
        const watchlist=await watchPage.getCategoryList();
        await expectChai(await watchlist).to.deep.equal(parameters.watchesCategoryList);
    });

    it('should hover fashion and click watches link', async() => {

        await watchPage.open();
        await (await watchPage.fashionlink).moveTo();
        // await (await watchPage.watchesLink).waitForDisplayed({timeout:5000});
        // await (await watchPage.watchesLink).click();
       await  waitAndClick(watchPage.watchesLink,5000);
        
    });
})
import searchPage from "../pages/searchPage";
import { waitForTextChange } from "../utility/helper";
import paramaters from '../resources/parameters';
import allureReporter from '@wdio/allure-reporter';
describe('eBay product search',()=>{

    it('should open url and verify the title',async()=>
    {
        await searchPage.open();

        await expect(browser).toHaveTitle(paramaters.homeTitle);
    });

    it('should search for a product and verify the search text value',async()=>
    {
       await (await searchPage.searchInput).addValue('Laptop');
       await searchPage.searchButton.click();
       await expect(searchPage.searchInput).toHaveValue('Laptop');
    });

    it('should direct to new page and verify the title',async()=>
    {
         allureReporter.addSeverity('Critical');
        await expect(browser).toHaveTitle(paramaters.laptopTitle);
    })

    it('should upadate the search category',async()=>{

        allureReporter.addFeature('Search category');
        // browser.waitUntil(
        //     function(){
        //         return searchPage.category.getText() === 'PC Laptops & Netbooks';
        //     },{timeout:3000}
        // )
        waitForTextChange(await searchPage.category,'PC Laptops & Netbooks',3000);
        expect(await searchPage.category).toHaveText('PC Laptops & Netbooks');
    })
})
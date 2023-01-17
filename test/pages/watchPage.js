import page from "./page";
class watchPage extends page{

    async open() {
        await super.open('/');
    }

    get banner() {
        return $('div.hl-loyalty');
    }

    get bannerTitle () {
        return $('h2.ebayui-ellipsis-2');
    }

    get linkButton() {
       
        return $('div div  div  div div a[_sp="p2481888.m4523.l8658.c1"]');
    }

    get categoryList() {

        return $$('li.b-links-accordion'); //11 elements
    }

    get fashionlink() {
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
    }

    get watchesLink() {
        return $('.hl-cat-nav__sub-cats a[href*="Wristwatches"]');
    }

    async openWatchCategoryPage(){
        await browser.url('/b/Jewelry-Watches/281/bn_1865273');
    }

    async getCategoryList(){
        const watchList = [];
       await this.categoryList.map(async (element)=>{
            watchList.push(await element.getText());
        })

        return watchList;
    }
}


export default new watchPage();
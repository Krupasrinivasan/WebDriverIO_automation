class blogPage{
    async open(){
        browser.url("https://practice.sdetunicorns.com/");
    } 

    get blogButton(){
        return $("//*[@id='menu-item-490']");
    }

    get allPosts(){
        return $$('//*[@id="recent-posts-3"]/ul/li');
    }
}

export default new blogPage();
import page from "./page";

class searchPage extends page{
    // const searchInput =  $('#gh-ac');
    // const searchButton  = $('#gh-btn');
    async open() {
        await super.open('/');
    }

    get searchInput() {
        return $('#gh-ac');
    }

    get searchButton() {
        return $('#gh-btn');
    }

    get category() {
        return $('#gh-cat option:nth-child(1)');
    }

}

export default new searchPage();
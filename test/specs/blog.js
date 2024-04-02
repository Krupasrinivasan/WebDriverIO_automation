describe('click blog button and assert the message', () => {

    it('open url and click block button', async() => {

        // open url
        await browser.url('https://practice.sdetunicorns.com/');

        //click contact button
        const blogButton = await $("//*[@id='menu-item-490']");
        await blogButton.click();

        //get all posts
        const posts = await $$('//*[@id="recent-posts-3"]/ul/li');
        await expect(posts.length).toEqual(5);

        var string = "";
        for ( const eachPost of posts)
        {
            string = await eachPost.getText();
            await expect(string.length).toBeGreaterThan(10);
        }
        
    });
});
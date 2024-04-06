import blogPage from '../pages/blogPage';

describe('click blog button and assert the message', () => {

    it('open url and click block button', async() => {

        // open url
        await blogPage.open();

        //click contact button
        await blogPage.blogButton.click();

        //get all posts
        const posts = await blogPage.allPosts;
        await expect(posts.length).toEqual(5);

        var string = "";
        for ( const eachPost of posts)
        {
            string = await eachPost.getText();
            await expect(string.length).toBeGreaterThan(10);
        }
        
    });
});
import { Eyes, Target } from '@applitools/eyes-webdriverio';

const eyes = new Eyes();

eyes.setApiKey('9yXypQm0HIfXZu111hUx0ab884J98sI6k2xpeMPIw7uNw110');

describe('Applitools Visual Test', function(){

    it('Page should look ok' , async function(){

        browser.url('https://applitools.com/helloworld/');

        try {

            browser.fullscreenWindow();
            const viewPortSize = browser.getWindowSize();

            await eyes.open(browser,'Helo world example','Our first visual test',viewPortSize); //open the browser and set the browser's viewportsize
            
            //await eyes.open(browser,'Helo world example','Our first visual test',{width: 375, height: 820}); customizing screen size

            await eyes.check('Main Page', Target.window()); //Visual checkpoint 1 take screenshot

            const button = $('button');
            
            await button.click(); //Click the button in the browser
            
            await eyes.check('Click!', Target.window()); //Visual checkpoint 2
            
            await eyes.close();
        
        } finally {

            await eyes.abort();
        }

    })
})
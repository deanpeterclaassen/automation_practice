const {Builder, Capabilities, By} = require('selenium-webdriver')


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()




beforeAll (async ()=>{
    await driver.get('http://127.0.0.1:5500/foundations/week_6/day_2/automation/movieList/index.html')
})

afterAll (async ()=>{
    await driver.quit()
})

test('I can check a movie', async ()=>{
    let inputmovie = await driver.findElement(By.xpath('//input'))

    await inputmovie.sendKeys('pee\n')

    let checked = await driver.findElement(By.xpath('//span'))

    await checked.click()

    await driver.sleep(2000)
})

test('I can delete a movie', async()=>{
    let inputmovie = await driver.findElement(By.xpath('//input'))

    await inputmovie.sendKeys('poop\n')
    await driver.sleep(2000)

    let deletes = await driver.findElement(By.id('poop'))

    await deletes.click()

    await driver.sleep(2000)
})

test('Message check', async()=>{
    await driver.findElement(By.className('hide'))
   
})
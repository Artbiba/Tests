import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';


fixture `Evolv 2.0 QA`
   .page `https://app-dev.evolv.ai/`;

   test(`Event Creation`, async t => {
await t
      .click('.jss375')
      .typeText('.auth0-lock-input-email input', 'lera.mashiro@qawerk.com')
      .typeText('.auth0-lock-input-password input', 'Testitplease!')
      .click('.auth0-lock-submit');

      await t.eval(() => location.reload());

await t.wait(5000);
      
await t
      .click('a[href*=events] li')
      .click('main .jss224.jss226.jss225 button')
      .typeText('#events-undefined input[name = name]', 'Example event')
      .typeText('#events-undefined textarea[name = description]', 'an event')
      .typeText('#events-undefined input[name = eventKey]', 'example.event')
      .click('#events-undefined .jss340:nth-child(3)');

await t.wait(2000);

await t
      .expect(Selector('.jss197.jss201.jss198 tbody').innerText).contains('Example event', 'Events contains text "Example event"')
           
});
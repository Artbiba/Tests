import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';


fixture `Evolv 2.0 QA`
   .page `https://app-dev.evolv.ai/`;




test(`Audience Creation`, async t => {
await t
      .click('.jss375')
      .typeText('.auth0-lock-input-email input', 'lera.mashiro@qawerk.com')
      .typeText('.auth0-lock-input-password input', 'Testitplease!')
      .click('.auth0-lock-submit');

      await t.eval(() => location.reload());

await t.wait(5000);
      
await t
      .click('a[href*="audiences"] lili')
      .click('main button')
      .typeText('#audiences-undefined input[name = name]', 'Example audience2')
      .typeText('#audiences-undefined textarea[name = description]', 'description2')
      .click('div[aria-pressed]')
      .click('ul[role = listbox] li:nth-child(2)')
      .click('.jss340.jss442.jss453.jss454.jss456.jss457');

await t.wait(2000);

await t
      .expect(Selector('tbody').innerText).contains('Example audience2', 'Audiences contains text "Example audience2"')
           
});
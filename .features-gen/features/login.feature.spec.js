// Generated from: features/login.feature
import { test } from "playwright-bdd";

test.describe('Conduit Authentication', () => {

  test('Successful login with existing user credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('I open the Conduit landing page', null, { page }); 
    await When('I navigate to the sign-in page', null, { page }); 
    await And('I submit my email "conduit@dirksonline.net" and password "qB85R86#ZMKME$jVEVq#vJMDr*A!cJk"', null, { page }); 
    await Then('I should be logged in and see my feed tabs', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the Conduit landing page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I navigate to the sign-in page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I submit my email \"conduit@dirksonline.net\" and password \"qB85R86#ZMKME$jVEVq#vJMDr*A!cJk\"","stepMatchArguments":[{"group":{"start":18,"value":"\"conduit@dirksonline.net\"","children":[{"start":19,"value":"conduit@dirksonline.net","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":57,"value":"\"qB85R86#ZMKME$jVEVq#vJMDr*A!cJk\"","children":[{"start":58,"value":"qB85R86#ZMKME$jVEVq#vJMDr*A!cJk","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in and see my feed tabs","stepMatchArguments":[]}]},
]; // bdd-data-end
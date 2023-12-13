const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show an empty restaurant', ({ I }) => {
  I.seeElement('.favorite');
  I.see('You don\'t have any Favorite Restaurant', '.message_empty');
});

Scenario('Like and dislike a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(15);
  I.seeElement('.restaurantContainer .restaurantItem');
  console.log('Resto container is visible');
  const firstResto = locate('.title .resto__name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  console.log('Resto name:', firstRestoTitle);
  I.wait(15);
  I.click(firstResto);
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.wait(15);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite .restoes .restaurantItem');
  const likedRestoName = await I.grabTextFrom('.title .resto__name');
  assert.strictEqual(firstRestoTitle, likedRestoName);
  I.wait(15);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.wait(15);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement(firstResto);
  I.see('You don\'t have any Favorite Restaurant', '.message_empty');
});

import FavoriteRestoIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helper/testFactories';

const addlikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};
describe('unlike a restaurant', () => {
  beforeEach(async () => {
    addlikeButtonContainer();
    await FavoriteRestoIdb.putRestaurant({ id: 1 });
  });
  afterEach(async () => {
    await FavoriteRestoIdb.deleteRestaurant(1);
  });
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    expect(document.querySelector('#likeButton'))
      .toBeTruthy();
  });
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    await FavoriteRestoIdb.deleteRestaurant(1);
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});

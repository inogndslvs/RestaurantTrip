import FavoriteRestoIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helper/testFactories';

describe('Like a restaurant', () => {
  const addlikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(() => {
    addlikeButtonContainer();
  });

  it('should show like button when the restaurant has not been liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show inlike button when the restaurant has not been liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the current restaurant', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getRestaurantById(1);
    expect(resto).toEqual({ id: 1 });
    FavoriteRestoIdb.deleteRestaurant(1);
  });
  it('should not add a like for a restaurant when it is already liked', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({ id: 1 });
    await FavoriteRestoIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestoIdb.deleteRestaurant(1);
  });
  it('should not add a like for a restaurant when it has no id', async () => {
    await TestFactories.createLikeBtnPresenterWithResto({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});

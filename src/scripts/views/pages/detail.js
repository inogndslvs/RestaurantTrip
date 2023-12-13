import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="resto">
    <h2>Detail Page</h2>  
    </div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurantListById(url.id);
    const detailRestoContainer = document.querySelector('#resto');
    detailRestoContainer.innerHTML = createRestaurantDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        address: resto.address,
        name: resto.name,
        description: resto.description,
        foods: resto.menus.foods,
        drinks: resto.menus.drinks,
        customerReviws: resto.customerReviews,
        city: resto.city,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;

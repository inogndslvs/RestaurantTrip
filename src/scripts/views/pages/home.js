import RestaurantDbSource from '../../data/restaurantdb-source';
import '../component/hero-baner';
import '../component/search-section';
import '../component/footer-section';
import { createRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <hero-baner></hero-baner>
          <search-section></search-section>
          <div id="restaurantContent" class="restaurantContainer">
          </div>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantDbSource.listRestaurant();
    const restoConten = document.querySelector('#restaurantContent');
    restaurant.forEach((resto) => {
      restoConten.innerHTML += createRestaurantTemplate(resto);
    });
  },
};

export default Home;

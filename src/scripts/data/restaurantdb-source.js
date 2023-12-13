import API_ENDPOINT from '../globals/api-endpoint';
// import CONFIG from '../globals/config';

class RestaurantSource {
  static async listRestaurant() {
    const resp = await fetch(API_ENDPOINT.list);
    const respJson = await resp.json();
    return respJson.restaurants;
  }

  static async detailRestaurantListById(id) {
    const resp = await fetch(API_ENDPOINT.detail(id));
    const respJson = await resp.json();
    return respJson.restaurant;
  }
}
export default RestaurantSource;

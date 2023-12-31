import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurantById(id) {
    if (!id) {
      console.error('Error: Missing id parameter in getRestaurantById');
      return null; // atau throw error sesuai kebutuhan
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(data) {
    if (!data.hasOwnProperty("id")) {
      return;
    }
  
    return (await dbPromise).put(OBJECT_STORE_NAME, data);
  },
  

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

};

export default FavoriteRestaurantIdb;

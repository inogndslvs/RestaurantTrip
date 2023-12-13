import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (resto) => `
<div class="detail-resto-container">
    <div class="main-card">
        <div class="left-card">
            <picture>
                <source media="(max-width: 600px)" srcset="${CONFIG.SMALL_BASE_IMAGE_URL + resto.pictureId}">
                <img class="restaurant-image lazyload" data-src="${CONFIG.MEDIUM_BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" class="resto_image">
            </picture>
        </div>
            
        <div class="right-card">
            <div class="desk-resto">
                <h3 class="nama-resto">${resto.name}</h3>
                <p class="desc-text">${resto.description}</p>
            </div>
            <h3 class="info">Informasi</h3>
            <p class="kota_res">Kota : ${resto.city}</p>
            <p class="alamat_res">Alamat : ${resto.address}</p>

            <div class="menu">

                <div class="menu-makanan">
                    <h4 class="makanan_resto">Menu Makanan</h4>
                    <p class="makanan_res">
                        <ul class="menu_list">
                            ${resto.menus.foods.map((food) => `<li class="menu_item">${food.name}</li>`).join(' ')}
                        </ul>
                    </p>
                </div>

                <div class="menu-minuman">
                    <h4 class="minuman-resto">Menu Minuman</h4>
                    <p class="minuman_res">
                        <ul class="menu-list">
                            ${resto.menus.drinks.map((drink) => `<li class="menu_item">${drink.name}</li>`).join(' ')}
                        </ul>
                    </p>
                </div>

            </div>

        </div>
    </div>
</div>

    <div class="review-resto">
        <h3 class="review-judul">Review</h3>
        <div class="review_card">
        ${resto.customerReviews.map((review) => `
            <div class="review-container card">
                <div class="review_photo">
                <i class="fas fa-user"></i>
            </div>
            <div class="review-element">
                <h3 class="review-consumen">${review.name}</h3>
                <small class="review-date">${review.date}</small>
                <p class="review-content">${review.review}</p>
            </div>
        </div>`).join('')}
    </div>

</div>
`;

const createRestaurantTemplate = (resto) => `
<div class="restaurantItem">

    <div class="Restaurant-item-header">
        <picture>
            <source media="(max-width: 600px)" srcset="${CONFIG.SMALL_BASE_IMAGE_URL + resto.pictureId}">
            <img class="restaurant-image lazyload" data-src="${CONFIG.SMALL_BASE_IMAGE_URL + resto.pictureId}" alt="gambar untuk kota ${resto.name}" title="${resto.name}">
        </picture>
        <div class="card-rating">
            <p class="">
                Rating : 
                <small class="card__rating__value">${resto.rating}</small>
            </p>
        </div>
    </div>

    <div class="Restaurant-item-content">
        <h4>${resto.city}<h4>
        <div class="text">
            <h2 class="title"><a href="${`/#/detail/${resto.id}`}" class="resto__name">${resto.name}</a></h2>
            <slice class="card-desc">${resto.description.slice(0, 125)}...</div>
        </div>
        <button class="detail-button"> <a href="${`/#/detail/${resto.id}`}">View Detail</a> </button>
    </div>

</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

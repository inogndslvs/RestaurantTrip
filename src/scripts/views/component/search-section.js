class SearchSection extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="searchItem">
    <h3>Explore <span>Restaurant</span></label></h3>
    <!-- Ini nanti saya tambahkan saat proses pengembangan selanjutnya -->
    <!-- <form action="">
      <label for="searchRestaurant">Explore <span>Restaurant</span></label>
      <input
        type="text"
        id="searchRestaurant"
        placeholder="Search Your Favorite Restaurant"
      />
    </form> -->
            `;
  }
}

customElements.define('search-section', SearchSection);

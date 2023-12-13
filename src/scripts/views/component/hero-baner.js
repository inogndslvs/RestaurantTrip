class HeroBaner extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero_title">
              <h1>Dengan Restaurant<span>Trip</span></h1>
              <h1> hidangan lezat <span>selalu</span> ada</h1> 
              <h1>di ujung jari <span>Anda</span></h1>
            </div>
        </div>
    `;
  }
}
customElements.define('hero-baner', HeroBaner);

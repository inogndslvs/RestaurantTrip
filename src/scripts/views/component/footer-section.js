class Footersection extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <footer class="rest-footer">
    <div class="navfoot" id="aboutus">
      <ul class="sidenav">
        <li><a href="#/home" class="sidenav-link">Home</a></li>
        <li><a href="#/favorite" class="sidenav-link">Favorite</a></li>
        <li><a href="https://github.com/inogndslvs" class="sidenav-link">About Us</a></li>
      </ul>
      <ul>
        <li><a href="https://api.whatsapp.com/send?phone=6281341117915">No : 081341117915</a></li>
        <li><a href="https://www.instagram.com/ino.gndslvs/">instagram : inogndslvs</a></li>
        <li><a href="https://github.com/inogndslvs">github : inogndslvs</a></li>
      </ul>
    </div>

    <div class="foot">
      <h6>Dibuat dengan penuh ♥, oleh inogndslvs</h6>
    </div>
    </footer>
          `;
  }
}
customElements.define('footer-section', Footersection);

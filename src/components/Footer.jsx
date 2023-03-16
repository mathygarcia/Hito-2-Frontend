const Footer = () => {
  return (
    <footer class="contenedor-footer py-3 border-top">
      <div class="contenedor-logo-span-footer col-md-4 d-flex align-items-center">
        <a
          href="/"
          class="contenedor-logo-footer"
        >
          <img
            className="logo-footer"
            src="https://i.postimg.cc/Wb2YyDKf/android-chrome-192x192.png"
            alt="logo-footer"
          />
        </a>
        <span class="span-footer-company mb-3 mb-md-0 text-muted">&copy; 2023 Get a Jobs Company, Inc</span>
      </div>

      <div class="contenedor-links">
        <div class="contenedor-li-github">
          <p>Github</p>
          <a class="text-muted" href="/">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div class="contenedor-li-linkedin">
          <p>Linkedin</p>
          <a class="text-muted" href="/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div class="contenedor-li-instagram">
          <p>Instagram</p>
          <a class="text-muted" href="/">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

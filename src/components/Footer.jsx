const Footer = () => {
  return (
    <footer className="contenedor-footer py-3 border-top">
      <div className="contenedor-logo-span-footer col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="contenedor-logo-footer"
        >
          <img
            className="logo-footer"
            src="https://i.postimg.cc/Wb2YyDKf/android-chrome-192x192.png"
            alt="logo-footer"
          />
        </a>
        <span className="span-footer-company mb-3 mb-md-0 text-muted">&copy; 2023 Get a Jobs Company, Inc</span>
      </div>

      <div className="contenedor-links">
        <div className="contenedor-li-github">
          <p>Github</p>
          <a className="text-muted" href="/">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="contenedor-li-linkedin">
          <p>Linkedin</p>
          <a className="text-muted" href="/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="contenedor-li-instagram">
          <p>Instagram</p>
          <a className="text-muted" href="/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

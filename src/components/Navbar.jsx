const Navbar = (props) => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-light pt-3"
      style={{ zIndex: "100" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ marginLeft: 70 }}>
          <img src="./assets/logo3.png" width={50} height={50} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
          style={{ paddingRight: "10rem" }}
        >
          <ul className="navbar-nav gap-4 gap-md-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
          </ul>
          <div className="nav-item icons d-flex gap-lg-1 ps-lg-3 ps-md-0">
            {
              // eslint-disable-next-line react/prop-types
              props.icons.map((icon, index) => (
                <a
                  key={index}
                  className="nav-link d-flex align-items-center justify-content-center border border-2 text-white"
                  href={icon.link}
                  target="_blank"
                >
                  {icon.icon}
                </a>
              ))
            }
          </div>
          <div
            className="connect bg-dark ms-lg-3 ms-md-0"
            style={{ width: "fit-content" }}
          >
            <a className="nav-link p-2 text-white" href="#connect">
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

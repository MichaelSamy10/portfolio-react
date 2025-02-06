const Footer = (props) => {
  return (
    <footer
      className="bg-gradient bg-light"
      style={{ backgroundColor: "#191919" }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <a href="#">
            <img src="./assets/logo3.png" width={50} height={50} />
          </a>
          <div className="pt-4">
            <div className="nav-item icons d-flex gap-lg-1 ps-lg-3 ps-md-0 justify-content-end mb-2">
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
            <p className="text-uppercase ">
              Copyright &copy; 2025 . all right reserved by michael
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

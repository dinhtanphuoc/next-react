const Header = props => (
  <div className="container-fluid bg-dark text-white py-1 d-none d-lg-block">
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="">
          <span>
            <i className="fas fa-map-marker-alt" aria-hidden="true" />
            <span className="pl-1">
              <small>
                01 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu, Thành Phố Đà Nẵng
              </small>
            </span>
          </span>
        </div>
        <div className="">
          <span className="pl-4">
            <i className="fas fa-envelope" aria-hidden="true" />
            <span className="pl-1">
              <small className="font-weight-bold">
                phuocdt.mmo@gmail.com
              </small>
            </span>
          </span>
          <span className="pl-4">
            <i className="fas fa-phone-volume" aria-hidden="true" />
            <span className="pl-1">
              <small>
                Hotline:
              </small>
              <span className="text-danger font-weight-bold"> (+84 934 895 060 )</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
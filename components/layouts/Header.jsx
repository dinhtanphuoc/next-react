import { connect } from 'react-redux';
import { get } from 'lodash';
import Navbar from './Navbar';

const Header = props => (
  <>
    <div className="container-fluid bg-dark text-white py-1 d-none d-xl-block">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="">
            <span>
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
              <span className="pl-1">
                <small>{ get(props, 'thongTin.diaChi', '') }</small>
              </span>
            </span>
          </div>
          <div className="">
            <span className="pl-4">
              <i className="fas fa-envelope" aria-hidden="true" />
              <span className="pl-1">
                <small className="font-weight-bold">{ get(props, 'thongTin.email', '') }</small>
              </span>
            </span>
            <span className="pl-4">
              <i className="fas fa-phone-volume" aria-hidden="true" />
              <span className="pl-1">
                <small>
                  Hotline:
                </small>
                <span className="text-danger font-weight-bold"> ({ get(props, 'thongTin.soDienThoai', '') })</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <Navbar />
  </>
);

const mapStateToProps = state => ({
  thongTin: state.setting.thongTin
});

export default connect(
  mapStateToProps,
  null
)(Header);

import { connect } from 'react-redux';
import { get } from 'lodash';

const Footer = props => (
  <>
    <div className="container-fluid bg-secondary text-white">
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-lg-5">
            <h4 className="text-uppercase pb-3">Liên hệ chúng tôi</h4>
            <h6>
              <i className="fas fa-home width-20" aria-hidden="true" />
              <small className="pl-2"> { get(props, 'thongTin.diaChi', '') }</small>
            </h6>
            <h6>
              <i className="fas fa-phone-volume width-20" aria-hidden="true" />
              <small className="pl-2">{ get(props, 'thongTin.soDienThoai', '') }</small>
            </h6>
            <h6>
              <i className="fas fa-envelope width-20" aria-hidden="true" />
              <small className="pl-2">{ get(props, 'thongTin.email', '') }</small>
            </h6>
            <h6>
              <i className="fas fa-globe width-20" aria-hidden="true" />
              <small className="pl-2">{ get(props, 'thongTin.website', '') }</small>
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-dark text-white-50">
      <div className="py-3">
        <small className="d-flex justify-content-center"> wwww.ketoangiakhang.net </small>
      </div>
    </div>
  </>
);

const mapStateToProps = state => ({
  thongTin: state.setting.thongTin
});

export default connect(
  mapStateToProps,
  null
)(Footer);
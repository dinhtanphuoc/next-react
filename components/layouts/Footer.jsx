import Router from 'next/router';
import { connect } from 'react-redux';
import { get, map, isArray } from 'lodash';

const handleRedirectItem = (link) => {
  if (!link) return;
  Router.push({ pathname: link })
}

const Footer = props => (
  <>
    <div className="container-fluid bg-info text-white">
      <div className="container">
        <div className="row pt-3 pb-3">
          <div className="col-lg-4 pb-3">
            <h4 className="text-uppercase pb-2">Liên hệ chúng tôi</h4>
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
          <div className="col-lg-4 pb-3">
            <h4 className="text-uppercase pb-2">Dịch vụ</h4>
            { isArray(props.dsDichVu.children) && map(props.dsDichVu.children, (item, index) =>
              <h6
                key={index}
                className="cursor-pointer font-weight-normal mt-2"
                onClick={() => handleRedirectItem(item.link)}
              >
                <i className="fas fa-arrow-right size-icon-13 pr-2" aria-hidden="true" />
                { item.name }
              </h6>
            )}
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase pb-2">Cẩm nang</h4>
            { isArray(props.dsCamNang.children) && map(props.dsCamNang.children, (item, index) =>
              <h6
                key={index}
                className="cursor-pointer font-weight-normal mt-2"
                onClick={() => handleRedirectItem(item.link)}
              >
                <i className="fas fa-arrow-right size-icon-13 pr-2" aria-hidden="true" />
                { item.name }
              </h6>
            )}
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
  thongTin: state.setting.thongTin,
  dsDichVu: state.setting.menuNavBar.find(item => item.link === '/dich-vu'),
  dsCamNang: state.setting.menuNavBar.find(item => item.link === '/cam-nang')
});

export default connect(
  mapStateToProps,
  null
)(Footer);
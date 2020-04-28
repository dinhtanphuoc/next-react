import Router from 'next/router';
import { connect } from 'react-redux';
import { map, isArray } from 'lodash';

const handleRedirect = () => {
  Router.push({ pathname: '/dich-vu' })
}

const handleRedirectItem = (link) => {
  if (!link) return;
  Router.push({ pathname: link })
}

const CP_CamNang = props => (
  <div className="container-fluid">
    <div className="container pt-4 pb-4">
      <div
        className="cursor-pointer d-flex justify-content-center"
        onClick={() => handleRedirect()}
      >
        <p className="h4 text-uppercase pb-2">Cẩm nang doanh nghiệp</p>
      </div>
      <div className="row mt-2">
        { isArray(props.dsCamNang.children) && map(props.dsCamNang.children, (item, index) => (
          <div className="col-lg-4" key={index}>
            <div
              className="cursor-pointer d-flex justify-content-center"
              onClick={() => handleRedirectItem(item.link)}
            >
              <div
                className="image-custom-cam-nang"
                style={{ backgroundImage: `url(${item.image})`}}
              />
            </div>
            <h6 className="d-flex justify-content-start mt-3 pb-2"> { item.title } </h6>
            <p className="d-flex justify-content-start">
              <small> { item.content} </small>
            </p>
          </div>
        )) }
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  dsCamNang: state.setting.menuNavBar.find(item => item.link === '/cam-nang')
});

export default connect(
  mapStateToProps,
  null
)(CP_CamNang);
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

const CP_DichVu = props => (
  <div className="container-fluid bg-light text-dark">
    <div className="container pt-4 pb-4">
      <div
        className="cursor-pointer d-flex justify-content-center"
        onClick={() => handleRedirect()}
      >
        <p className="h4 text-uppercase pb-2">Dịch vụ chúng tôi</p>
      </div>
      <div className="row mt-2">
        { isArray(props.dsDichVu.children) && map(props.dsDichVu.children, (item, index) => (
          <div className="col-lg-4" key={index}>
            <div
              className="cursor-pointer d-flex justify-content-center"
              onClick={() => handleRedirectItem(item.link)}
            >
              <div
                className="image-custom-dich-vu"
                style={{ backgroundImage: `url(${item.image})`}}
              />
            </div>
            <p className="d-flex justify-content-center text-uppercase mt-2 font-weight-bold"> { item.name } </p>
            <p className="d-flex justify-content-center text-center">
              <small> { item.content} </small>
            </p>
          </div>
        )) }
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  dsDichVu: state.setting.menuNavBar.find(item => item.link === '/dich-vu')
});

export default connect(
  mapStateToProps,
  null
)(CP_DichVu);
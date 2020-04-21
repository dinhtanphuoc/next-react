
import { connect } from 'react-redux';
import { get } from 'lodash';
import Router from 'next/router';

const handleRedirect = () => {
  Router.push({ pathname: '/gioi-thieu' })
}

const CP_GioiThieu = props => (
  <div className="container pt-4 pb-4">
    <div className="d-flex justify-content-center">
      <p className="h4 text-uppercase">Vì sao bạn nên chọn chúng tôi</p>
    </div>
    <div className="row mt-3">
      <div className="col-lg-6">
        <p className="h6 text-uppercase">{ get(props, 'gioiThieu.title', '') }</p>
        <p className="pt-2">
          <small>{ get(props, 'gioiThieu.contentRutGon', '') }</small>
        </p>
        <div className="d-flex justify-content-center my-3 ">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => handleRedirect()}
          >
            Xem thêm
          </button>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="image-custom-gioi-thieu"
          style={{ backgroundImage: `url(${get(props, 'gioiThieu.image')})`}}
        />
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  gioiThieu: state.setting.gioiThieu
});

export default connect(
  mapStateToProps,
  null
)(CP_GioiThieu);
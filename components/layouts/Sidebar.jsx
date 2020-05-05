import Router from 'next/router';
import { connect } from 'react-redux';
import { get, map, isArray } from 'lodash';

const handleRedirectItem = (link) => {
  if (!link) return;
  Router.push({ pathname: link })
}

const Siderbar = props => (
  <>
    <div className="bg-light py-3 px-3">
      <h4 className="font-weight-bold pb-2">Dịch vụ</h4>
      { isArray(props.dsDichVu.children) && map(props.dsDichVu.children, (item, index) =>
        <h6
          key={index}
          className="cursor-pointer font-weight-normal py-2 border-bottom border-secondary"
          onClick={() => handleRedirectItem(item.link)}
        >
          <i className="fas fa-arrow-right size-icon-13 pr-2" aria-hidden="true" />
          { item.name }
        </h6>
      )}
    </div>

    <div className="bg-light py-3 px-3 mt-4">
    <h4 className="font-weight-bold pb-2">Cẩm nang</h4>
    { isArray(props.dsCamNang.children) && map(props.dsCamNang.children, (item, index) =>
      <h6
        key={index}
        className="cursor-pointer font-weight-normal py-2 border-bottom border-secondary"
        onClick={() => handleRedirectItem(item.link)}
      >
        <i className="fas fa-arrow-right size-icon-13 pr-2" aria-hidden="true" />
        { item.name }
      </h6>
    )}
    </div>
  </>
)

const mapStateToProps = state => ({
  dsDichVu: state.setting.menuNavBar.find(item => item.link === '/dich-vu'),
  dsCamNang: state.setting.menuNavBar.find(item => item.link === '/cam-nang')
});

export default connect(
  mapStateToProps,
  null
)(Siderbar);
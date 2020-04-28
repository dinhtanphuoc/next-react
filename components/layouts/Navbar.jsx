import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/router';
import logo from '../../assets/images/logo-ketoangiakhang.png';
import { map, isArray, isEmpty } from 'lodash';
import classnames from 'classnames';

const handleRedirect = () => {
  Router.push({ pathname: '/' })
}

const Navbar = props => {

  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-xl navbar-light container-fluid bg-light text-dark py-3 sticky-top">
      <div className="container">
        <div className="d-flex justify-content-between w-100">
          <div className="logo cursor-pointer">
            <div
              className="logo-custom"
              style={{ backgroundImage: `url(${logo})`}}
              onClick={() => handleRedirect()}
            />
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav font-weight-bold cursor-pointer text-uppercase">
              { isArray(props.dataNavBar) && map(props.dataNavBar, (item) => (
                <li className={classnames('nav-item', {
                  active: (router.pathname.lastIndexOf(item.link) === 0 && router.pathname === item.link
                    ) || (router.pathname.lastIndexOf(item.link) === 0 && item.link !== '/'
                    ) || (router.pathname === item.link)
                })} key={item.link}>
                  <Link href={item.link}>
                    <span className="nav-link color-navbar">{item.name}</span>
                  </Link>
                  { !isEmpty(item.children) && <DropdownContent children={item.children} router={router} /> }
                </li>
              ))}
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-target="#navbarNav" aria-controls="navbarNav" data-toggle="collapse">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    </nav>
  )
};

const DropdownContent = props => (
  <div className={classnames('dropdown-content', {
    'width-540': props.children.length >= 10,
    'width-250': props.children.length < 10,
  })}>
    <div className="dropdown-content-custom">
      { isArray(props.children) && map(props.children, (item) => (
        <div className={classnames('width-250 d-inline-block nav-children-item', {
          'm-rl-10': props.children.length >= 10,
          active: props.router.asPath === item.link
        })} key={item.link}>
          <Link href={item.link}>
            <span className="nav-link color-navbar">
              <i className="fas fa-arrow-right size-icon-13 pr-2" aria-hidden="true" />
              {item.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  dataNavBar: state.setting.menuNavBar
});

export default connect(
  mapStateToProps,
  null
)(Navbar);
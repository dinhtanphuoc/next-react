import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/router';
import logo from '../../assets/images/logo-ketoangiakhang.png';
import { map, isArray } from 'lodash';
import classnames from 'classnames';

const handleRedirect = () => {
  Router.push({ pathname: '/' })
}

const Navbar = props => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-light container-fluid bg-light text-dark py-3 sticky-top">
      <div className="container">
        <div className="d-flex justify-content-between w-100">
          <div className="logo cursor-pointer">
            <div
              className="logo-custom"
              style={{ backgroundImage: `url(${logo})`}}
              onClick={() => handleRedirect()}
            />
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav font-weight-bold cursor-pointer text-uppercase">
              { isArray(dataNavBar) && map(dataNavBar, (item) => (
                <li className={classnames('nav-item', {
                  active: (router.pathname.lastIndexOf(item.link) === 0 && router.pathname === item.link
                    ) || (router.pathname.lastIndexOf(item.link) === 0 && item.link !== '/'
                    ) || (router.pathname === item.link)
                })} key={item.link}>
                  <Link href={item.link}>
                    <span className="nav-link color-navbar">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;

const dataNavBar = [
  {
    link: '/',
    name: 'Trang chủ'
  },
  {
    link: '/gioi-thieu',
    name: 'Giới thiệu'
  },
  {
    link: '/dich-vu',
    name: 'Dịch vụ'
  },
  {
    link: '/bang-gia',
    name: 'Bảng giá'
  },
  {
    link: '/tu-van',
    name: 'Tư vấn'
  },
  {
    link: '/cam-nang',
    name: 'Cẩm nang'
  },
  {
    link: '/lien-he',
    name: 'Liên hệ'
  }
];

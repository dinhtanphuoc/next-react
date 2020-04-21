import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <div className="container-fluid px-0">
    <Header />
    <div className="container-fluid px-0">
      { props.children }
    </div>
    <Footer />
  </div>
);

export default Layout;
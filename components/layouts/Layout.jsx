import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => (
  <div className="container-fluid px-0">
    <Header />
    <Navbar />
    <div className="container-fluid px-0"> { props.children } </div>
    <Footer />
  </div>
);

export default Layout;
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>Bitz Price</title>
      {/* bootswatch is a service that provides bootstrap themes*/}
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />

    </Head>
    <Navbar />
    {props.children}
  </div>

);

export default Layout;

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Catalog from '../components/catalog/catalog';

function MyList(): JSX.Element {
  return (
    <div className="user-page">

      <Header />

      <Catalog />

      <Footer />

    </div>

  );
}

export default MyList;

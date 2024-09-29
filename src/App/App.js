import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Product from "../Product/Product";
const App = () => {
  return (
    <main className="bg-dark flex flex-col items-center">
      <Menu />
      <Header />
      <Product />
      <Footer />
    </main>
  );
};

export default App;

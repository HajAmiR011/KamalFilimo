import Menu from "../../Menu/Menu";
import Header from "./Header/Header";
import Product from "./Product/Product";
import Footer from "../../Footer/Footer";
const FilimoIrancell = () => {
  return (
    <main className="bg-dark flex flex-col items-center">
      <Menu />
      <Header />
      <Product />
      <Footer />
    </main>
  );
};

export default FilimoIrancell;

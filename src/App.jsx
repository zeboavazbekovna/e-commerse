import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { Footer, Header, Sidebar } from "./components";

import CartProvider from "./contexts/CartContext";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;

import { Header, Hero } from "./components";
import CartProvider from "./contexts/CartContext";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Header />
        <Hero />
      </CartProvider>
    </div>
  );
};

export default App;

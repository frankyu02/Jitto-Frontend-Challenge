import Cart from "@/components/cart/cart";
import NavBar from "@/components/navBar/navBar";
import ShopContext from "@/context/cartContext";
import { useState } from "react";
import GlobalStyles from "../styles/globalStyles";
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  return (
    <>
      <GlobalStyles />
      <ShopContext.Provider value={{ cart, setCart }}>
        <NavBar />
        <Component {...pageProps} />
        <Cart />
      </ShopContext.Provider>
    </>
  );
}

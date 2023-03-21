import ShopContext from "@/context/cartContext";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartInfo from "./cartInto";

const Wrapper = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  border: 2px solid var(--background-primary);
  z-index: 1000;
  background-color: var(--background-primary);
  border-radius: 50%;
  left: 10%;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
  color: var(--background-secondary);
  P {
    position: absolute;
    font-size: 1.3rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;
    margin-left: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export default function Cart() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    function updatePage() {
      setLoggedIn(JSON.parse(localStorage.getItem("jitto_logged_in")) ?? false);
    }
    updatePage();
    window.addEventListener("storage", updatePage);
    return () => {
      window.removeEventListener("storage", updatePage);
    };
  });
  const { cart } = useContext(ShopContext);
  const [open, setOpen] = useState(false);
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity || 0;
  });
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {loggedIn ? (
        <>
          <Wrapper onClick={handleClick}>
            <AiOutlineShoppingCart />
            <p>{total > 9 ? "9+" : total}</p>
          </Wrapper>
          <CartInfo open={open} cart={cart} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

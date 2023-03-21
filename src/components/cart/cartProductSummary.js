import ShopContext from "@/context/cartContext";
import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 95%;
  height: 20%;
  display: flex;
  border-bottom: 1px solid var(--background-primary);
  padding-right: 5%;
  align-items: center;
  justify-content: space-between;
  .quantityController {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sign {
    width: 30px;
    height: 30px;
    outline: 2px solid var(--background-primary);
    margin-left: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: var(--background-primary);
    &:hover {
      cursor: pointer;
    }
  }
  p {
    position: static;
    margin-left: 1em;
  }
`;
export default function CartProductSummary({ product, index }) {
  const { setCart, cart } = useContext(ShopContext);
  const cost = product.price * product.quantity || 0;
  const handleSub = () => {
    const cartcpy = [...cart];
    if (cartcpy[index].quantity === 1) {
      cartcpy.splice(index, 1);
      setCart(cartcpy);
    } else {
      cartcpy[index].quantity -= 1;
      setCart(cartcpy);
    }
  };
  const handleAdd = () => {
    const cartCpy = [...cart];
    cartCpy[index].quantity += 1;
    setCart(cartCpy);
  };
  return (
    <Wrapper>
      <div className="quantityController">
        <div className="sign" onClick={handleAdd}>
          +
        </div>
        <p>{product.quantity || 0}</p>
        <div className="sign" onClick={handleSub}>
          -
        </div>
      </div>
      <p>{product.name}</p>
      <p>${cost}</p>
    </Wrapper>
  );
}

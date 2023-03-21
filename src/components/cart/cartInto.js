import styled from "styled-components";
import CartProductSummary from "./cartProductSummary";

const Wrapper = styled.div`
  width: 500px;
  height: ${(props) => (props.open ? "700px" : "0px")};
  border: ${(props) =>
    props.open ? "2px solid var(--background-primary)" : "none"};
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 240px;
  margin-left: 200px;
  background-color: white;
  overflow-x: hidden;
  overflow: hidden;
  transition: 0.3s;
  align-items: center;
  display: flex;
  flex-direction: column;
  .summaryContainer {
    width: 100%;
    height: 75%;
    overflow-y: auto;
  }
  .totalSummary {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin: 0;
    margin-left: 10%;
    font-size: 1.75em;
    span {
      font-size: 0.7em;
      font-weight: normal;
      position: absolute;
      left: 70%;
    }
  }
  button {
    margin-top: 10px;
    width: 70%;
    height: 5%;
    background-color: var(--background-primary);
    border: none;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export default function CartInfo({ cart, open }) {
  let sum = 0;
  for (let product of cart) {
    sum += product.quantity * product.price;
  }
  const tax = sum * 0.13;
  return (
    <Wrapper open={open}>
      <div className="summaryContainer">
        {cart.map((product, idx) => {
          return <CartProductSummary product={product} key={idx} index={idx} />;
        })}
      </div>
      <p className="totalSummary">
        Sum: <span>${sum.toFixed(2)}</span>
      </p>
      <p className="totalSummary">
        Tax: <span>${tax.toFixed(2)}</span>
      </p>
      <p className="totalSummary">
        Total: <span>${(sum * 1.13).toFixed(2)}</span>
      </p>
      <button>Checkout</button>
    </Wrapper>
  );
}

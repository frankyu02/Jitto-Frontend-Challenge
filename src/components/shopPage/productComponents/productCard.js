import styled from "styled-components";
import { CiApple } from "react-icons/ci";
import { FaCarrot, FaBreadSlice } from "react-icons/fa";
import { GiMilkCarton, GiChipsBag, GiMeat } from "react-icons/gi";

const Card = styled.div`
  width: 200px;
  height: 250px;
  border: 1px solid var(--background-primary);
  position: relative;
  .addToCart {
    position: absolute;
    bottom: 0;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--background-primary);
    color: white;
    z-index: 5000;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
    }
  }
  &:hover {
    .addToCart {
      height: 20%;
    }
  }
  .icon {
    width: 100%;
    height: 50%;
    font-size: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    width: 100%;
    text-align: center;
    font-size: 1.5em;
    padding: 0;
    margin: 0;
  }
  .price {
    font-size: 1.2em;
  }
`;
export default function ProductCard({ product, setCart, cart }) {
  const findItemInCart = (cart, name) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        return i;
      }
    }
    return -1;
  };
  const handleAddToCart = () => {
    const cartCopy = [...cart];
    const index = findItemInCart(cartCopy, product.name);
    if (index != -1) {
      cartCopy[index].quantity += 1;
    } else {
      const productCopy = { ...product };
      productCopy.quantity = 1;
      cartCopy.push(productCopy);
    }
    setCart(cartCopy);
  };
  const categoryMap = {
    fruit: <CiApple />,
    vegetable: <FaCarrot />,
    dairy: <GiMilkCarton />,
    meat: <GiMeat />,
    snack: <GiChipsBag />,
    bakery: <FaBreadSlice />,
  };
  return (
    <Card>
      <div className="icon">{categoryMap[product.category]}</div>
      <p>{product.name}</p>
      <p className="price">${product.price}</p>
      <div className="addToCart" onClick={handleAddToCart}>
        Add To Cart
      </div>
    </Card>
  );
}

import ShopContext from "@/context/cartContext";
import { defaultFilter, products } from "@/pageInfos/productContent";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Filters from "./FilterComponent/filterComponent";
import ProductCard from "./productComponents/productCard";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 1400px;
  /* outline: 5px solid red; */
  display: flex;
  .filter {
    margin-top: 10px;
    width: 20%;
    height: 100%;
  }
  .products {
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    height: 0;
    margin-top: 15px;
  }
`;
export default function ShopLayout() {
  const { cart, setCart } = useContext(ShopContext);
  const items = products;
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState(defaultFilter);
  const router = useRouter();
  useEffect(() => {
    let tempObj = { ...filters };
    for (let key of Object.keys(router.query)) {
      if (tempObj.hasOwnProperty(key)) {
        if (key === "categories" && !Array.isArray(router.query[key])) {
          tempObj[key].push(router.query[key]);
        } else {
          tempObj[key] = router.query[key];
        }
      }
    }
    setFilters(tempObj);
  }, [router]);
  useEffect(() => {
    const filteredProduct = items.filter((item) => {
      return (
        item.price <= filters.maxPrice &&
        (filters.categories.length === 0 ||
          filters.categories.includes(item.category))
      );
    });
    setFilteredItems(filteredProduct);
  }, [filters]);
  return (
    <Wrapper>
      <div className="filter">
        <Filters filters={filters} setFilters={setFilters} />
      </div>
      <div className="products">
        {filteredItems.map((item, i) => {
          return (
            <ProductCard cart={cart} setCart={setCart} product={item} key={i} />
          );
        })}
      </div>
    </Wrapper>
  );
}

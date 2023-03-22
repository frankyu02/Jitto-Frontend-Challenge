import { useRouter } from "next/router";
import styled from "styled-components";
import CategoryFilter from "./categoryFilter";
import Slider from "./slider";

const Wrapper = styled.div`
  width: 100%;
  h3 {
    text-align: center;
  }
  .resetButton {
    width: 70%;
    margin: 0 15%;
    margin-top: 5%;
    background-color: var(--background-secondary);
    border: none;
    border-radius: 10px;
    color: var(--background-primary);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
export default function Filters({ filters, setFilters }) {
  const categories = ["fruit", "vegetable", "dairy", "meat", "bakery", "snack"];
  const route = useRouter();
  const handleReset = () => {
    const freshFilter = {
      maxPrice: 10000,
      categories: [],
    };
    setFilters(freshFilter);
    route.push({ query: freshFilter }, undefined);
  };
  return (
    <Wrapper>
      <h3>Filters</h3>
      {categories.map((val, i) => {
        return (
          <CategoryFilter
            key={i}
            filters={filters}
            category={val}
            selected={filters?.categories?.includes(val)}
            setFilters={setFilters}
          />
        );
      })}
      <Slider filters={filters} setFilters={setFilters} />
      <button onClick={handleReset} className={"resetButton"}>
        Reset
      </button>
    </Wrapper>
  );
}

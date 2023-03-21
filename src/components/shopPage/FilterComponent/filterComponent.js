import styled from "styled-components";
import CategoryFilter from "./categoryFilter";
import Slider from "./slider";

const Wrapper = styled.div`
  width: 100%;
  h3 {
    text-align: center;
  }
`;
export default function Filters({ filters, setFilters }) {
  const categories = ["fruit", "vegetable", "dairy", "meat", "bakery", "snack"];
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
    </Wrapper>
  );
}

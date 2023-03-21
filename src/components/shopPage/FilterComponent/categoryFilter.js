import { FilterToQueryString } from "@/utils/filtersToQueryString";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  .checkbox {
    width: 10%;
    height: 0;
    padding-bottom: 10%;
    margin: 0 10%;
    outline: 2px solid var(--background-primary);
    background-color: ${(props) =>
      props.selected ? "var(--background-primary)" : "white"};
    &:hover {
      cursor: pointer;
    }
  }
`;
export default function CategoryFilter({
  filters,
  category,
  selected,
  setFilters,
}) {
  const [active, setActive] = useState(selected);
  const route = useRouter();
  useEffect(() => {
    setActive(selected);
  }, [selected]);
  const handleClick = () => {
    const tempObj = { ...filters };
    if (active) {
      tempObj.categories = tempObj.categories.filter((cat) => cat !== category);
    } else {
      tempObj.categories.push(category);
    }
    setActive(!active);
    setFilters(tempObj);
    route.push({ query: tempObj }, undefined);
  };
  return (
    <Wrapper selected={active}>
      <div className={"checkbox"} onClick={handleClick}></div>
      <div>{category}</div>
    </Wrapper>
  );
}

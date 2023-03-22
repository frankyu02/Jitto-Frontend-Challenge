import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-left: 10px;
  input {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 90%;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background: var(--background-primary);
    height: 0.5rem;
    border-radius: 25px;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: calc(0.5rem / 2 - 1.25em / 2); /* Centers thumb on the track */
    background-color: var(--background-secondary);
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;
  }
`;
export default function Slider({ filters, setFilters }) {
  const SLIDERMAX = 100;
  const [sliderValue, setSliderValue] = useState(filters?.maxPrice ?? 0);
  if (sliderValue > SLIDERMAX) {
    setSliderValue(SLIDERMAX);
  }
  useEffect(() => {
    setSliderValue(filters?.maxPrice ?? 0);
    if (sliderValue > SLIDERMAX) {
      setSliderValue(SLIDERMAX);
    }
  }, [filters]);
  const route = useRouter();
  const handleChange = (e) => {
    e.preventDefault();
    setSliderValue(e.target.value);
  };
  const updateFilter = () => {
    const tempObj = { ...filters };
    tempObj.maxPrice = sliderValue;
    setFilters(tempObj);
    route.push({ query: tempObj }, undefined);
  };
  return (
    <Wrapper>
      <p>Max Price: {sliderValue}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleChange}
        onMouseUp={updateFilter}
        onTouchEnd={updateFilter}
      ></input>
    </Wrapper>
  );
}

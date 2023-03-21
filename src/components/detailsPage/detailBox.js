import { useState } from "react";
import styled from "styled-components";
import { IoTriangleSharp } from "react-icons/io5";

const Wrapper = styled.div`
  width: 80%;
  border: 3px solid var(--background-primary);
  border-bottom-left-radius: ${(props) => (props.open ? "20px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.open ? "20px" : "0px")};
  margin-top: 5%;
  .detailHeader {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-primary);
    color: white;
    h2 {
      font-size: 2rem;
    }
  }
  .boxChanger {
    position: absolute;
    left: 0.7em;
    transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(90deg)")};
    transition: 0.2s;
    &:hover {
      cursor: pointer;
    }
  }
  .contentOpen {
    margin: 1.5em;
  }
  .contentClosed {
    height: 0;
    overflow: hidden;
  }
  .detail-content {
    transition: 0.2s;
  }
`;
export default function DetailBox({ detail, content }) {
  const [open, setOpen] = useState(false);
  const handleOpenClose = () => {
    setOpen(!open);
  };
  return (
    <Wrapper open={open}>
      <section className="detailHeader">
        <h2 className="boxChanger">
          <IoTriangleSharp onClick={handleOpenClose} />
        </h2>
        <h2>{detail}</h2>
      </section>
      <section
        className={(open ? "contentOpen" : "contentClosed") + " detail-content"}
      >
        {content}
      </section>
    </Wrapper>
  );
}

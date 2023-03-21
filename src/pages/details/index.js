import DetailBox from "@/components/detailsPage/detailBox";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - min(10vh, 150px));
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function DetailsPage() {
  return (
    <Wrapper>
      <DetailBox
        detail={"Detail"}
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
      <DetailBox
        detail={"Detail"}
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
    </Wrapper>
  );
}

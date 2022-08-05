import styled from "styled-components";

interface ContainerProps {
  direction?: "row" | "column";
}

// const Container = styled.div<ContainerProps>`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: ${({ direction }) => direction || "row"};
//   justify-content: center;
//   margin: 0 auto;
//   max-width: 100%;

//   @media (min-width: 1024px) {
//     flex-wrap: nowrap;
//   }
// `;

const Container = styled.div<ContainerProps>`
  width: 1000px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;

  & > div {
    padding: 0px;
    margin: 0;
  }
`;

export default Container;

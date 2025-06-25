import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;

      @media (max-width: 59em) {
        font-size: 2.6rem;
      }
      @media (max-width: 52em) {
        font-size: 1.5rem;
      }
      @media (max-width: 34em) {
        font-size: 1.2rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;

      @media (max-width: 59em) {
        font-size: 2.2rem;
      }
      @media (max-width: 34em) {
        font-size: 1.8rem;
      }
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;

      @media (max-width: 59em) {
        font-size: 3.2rem;
      }
      @media (max-width: 34em) {
        font-size: 2rem;
      }
    `}
    
  line-height: 1.4;
`;

export default Heading;

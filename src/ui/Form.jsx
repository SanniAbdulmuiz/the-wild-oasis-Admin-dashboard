import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media (max-width: 52em) {
        padding: 2rem 3rem;
      }
      @media (max-width: 34em) {
        padding: 1rem 1.5rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  @media (max-width: 52em) {
    font-size: 1rem;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;

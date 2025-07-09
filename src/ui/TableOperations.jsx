import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 59em) {
    gap: 1.2rem;
  }
  @media (max-width: 34em) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export default TableOperations;

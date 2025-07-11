import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;

  @media (max-width: 34em) {
    gap: 1.3rem;
    font-size: 1.2rem;
    padding: 0.4rem 0;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  @media (max-width: 34em) {
    gap: 0.6rem;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);

    @media (max-width: 34em) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;

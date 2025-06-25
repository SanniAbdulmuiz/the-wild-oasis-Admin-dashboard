import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  z-index: 1002;

  @media (max-width: 75em) {
    position: fixed;
    top: 0;
    left: ${({ $visible }) => ($visible ? "0" : "-100%")};
    width: 26rem;
    height: 100%;
    background-color: var(--color-grey-0);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
    transition: left 0.3s ease;
  }
  @media (max-width: 34em) {
    padding: 1.5rem 1.2rem;
    gap: 1rem;
    width: 15rem;
  }
`;

function Sidebar({ $visible }) {
  return (
    <StyledSidebar $visible={$visible}>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;

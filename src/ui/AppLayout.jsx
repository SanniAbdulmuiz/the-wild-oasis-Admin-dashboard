import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { HiOutlineBars4 } from "react-icons/hi2";
import Sidebar from "./Sidebar";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 75em) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: auto;
  position: relative;

  @media (max-width: 59em) {
    padding: 4rem 4.4rem 6rem;
  }
  @media (max-width: 34em) {
    padding: 2rem 2.2rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 59em) {
    gap: 3rem;
  }
  @media (max-width: 34em) {
    gap: 1.5rem;
  }
`;

const SidebarToggle = styled.button`
  display: none;

  @media (max-width: 75em) {
    display: block;
    position: fixed;
    top: 2rem;
    left: 2rem;
    background: none;
    border: none;
    font-size: 3.2rem;
    z-index: 1001;
    color: var(--color-grey-900);
    cursor: pointer;
  }

  @media (max-width: 34em) {
    font-size: 2.4rem;
    top: 1.5rem;
  }
`;

const Overlay = styled.div`
  display: ${({ $show }) => ($show ? "block" : "none")};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggle = () => setShowSidebar((prev) => !prev);
  const handleClose = () => setShowSidebar(false);

  return (
    <>
      <StyledAppLayout>
        <Header />
        <SidebarToggle onClick={handleToggle}>
          <HiOutlineBars4 />
        </SidebarToggle>
        <Sidebar $visible={showSidebar} />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>

      <Overlay $show={showSidebar} onClick={handleClose} />
    </>
  );
}

export default AppLayout;

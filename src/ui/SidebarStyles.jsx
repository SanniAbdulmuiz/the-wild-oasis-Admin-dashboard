import styled from "styled-components";

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2.4rem;
  display: none;

  @media (max-width: 34em) {
    display: block;
  }
`;

// Hide operations on small screens
export const DesktopOperations = styled.div`
  @media (max-width: 34em) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const SidebarPanel = styled.div`
  position: fixed;
  top: 5.8rem;
  right: 0;
  height: 100%;
  width: 20rem;
  max-width: 250px;
  background-color: var(--color-grey-0);
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
  z-index: 1000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  transition: right 0.3s ease;

  //transition: transform 0.3s ease;
`;

// export const Overlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 999;
//   opacity: 1;
//   transition: opacity 0.3s ease;
// `;
// export const SidebarPanel = styled.div`

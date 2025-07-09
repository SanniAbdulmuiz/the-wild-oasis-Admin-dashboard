import { useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { useOutsideClick } from "../hooks/useOutsideClick";
import {
  MenuButton,
  DesktopOperations,
  Overlay,
  SidebarPanel,
} from "../ui/SidebarStyles";

function Cabins() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  const sidebarRef = useOutsideClick(closeSidebar);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>

        <DesktopOperations>
          <CabinTableOperations />
        </DesktopOperations>

        <MenuButton onClick={() => setIsSidebarOpen(true)}>
          <HiEllipsisVertical />
        </MenuButton>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>

      {isSidebarOpen && (
        <>
          <Overlay />
          <SidebarPanel ref={sidebarRef}>
            <CabinTableOperations />
          </SidebarPanel>
        </>
      )}
    </>
  );
}

export default Cabins;

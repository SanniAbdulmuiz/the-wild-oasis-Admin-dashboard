import { useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { useOutsideClick } from "../hooks/useOutsideClick";
import {
  DesktopOperations,
  MenuButton,
  Overlay,
  SidebarPanel,
} from "../ui/SidebarStyles";

function Bookings() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close handler for sidebar
  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  // Register outside click ref
  const sidebarRef = useOutsideClick(closeSidebar);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>

        <DesktopOperations>
          <BookingTableOperations />
        </DesktopOperations>

        <MenuButton onClick={() => setIsSidebarOpen(true)}>
          <HiEllipsisVertical />
        </MenuButton>
      </Row>

      <BookingTable />

      {isSidebarOpen && (
        <>
          <Overlay />
          <SidebarPanel ref={sidebarRef}>
            <BookingTableOperations />
          </SidebarPanel>
        </>
      )}
    </>
  );
}

export default Bookings;

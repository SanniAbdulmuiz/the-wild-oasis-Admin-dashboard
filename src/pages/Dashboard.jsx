import { useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useOutsideClick } from "../hooks/useOutsideClick";
import {
  MenuButton,
  DesktopOperations,
  Overlay,
  SidebarPanel,
} from "../ui/SidebarStyles";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on outside click
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  const sidebarRef = useOutsideClick(closeSidebar);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>

        <DesktopOperations>
          <DashboardFilter />
        </DesktopOperations>

        <MenuButton onClick={() => setIsSidebarOpen(true)}>
          <HiEllipsisVertical />
        </MenuButton>
      </Row>

      <DashboardLayout />

      {isSidebarOpen && (
        <>
          <Overlay />
          <SidebarPanel ref={sidebarRef}>
            <DashboardFilter />
          </SidebarPanel>
        </>
      )}
    </>
  );
}

export default Dashboard;

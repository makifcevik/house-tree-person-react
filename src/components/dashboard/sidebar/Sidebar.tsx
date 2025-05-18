import {
  faHome,
  faUserAlt,
  faCog,
  faChartBar,
  faDatabase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";
import { Typography } from "../../ui/Typography";
import SidebarDropdown from "./SidebarDropdown";
import SidebarSubItem from "./SidebarSubItem";
import { useNavigate } from "react-router-dom";
import ROUTES from "@/routes/routes";
import { DashboardSectionType } from "@/types";

interface SidebarProps {
  isSidebarOpen: boolean;
  activeSection: DashboardSectionType | null;
  setActiveSection: React.Dispatch<React.SetStateAction<DashboardSectionType | null>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  activeSection,
  setActiveSection,
}) => {
  const navigate = useNavigate();
  return (
    <nav
      className='dark:bg-input/20 border-r-2 flex flex-col transition-width duration-300 ease-in-out py-6 px-4 fixed h-screen'
      style={{ width: isSidebarOpen ? 240 : 0 }}
    >
      {isSidebarOpen && (
        <div className='flex flex-col space-y-2 '>
          <Typography variant='h3' className='mb-8'>
            Dashboard
          </Typography>
          <div className='mb-4'>
            <SidebarItem
              icon={faHome}
              label='Home'
              onClick={() => navigate(ROUTES.HOME)}
            />
          </div>
          <SidebarDropdown icon={faChartBar} label='Statistics'>
            <SidebarSubItem
              icon={faUserAlt}
              label='User'
              isActive={activeSection === "userStats"}
              onClick={() => setActiveSection("userStats")}
            />
            <SidebarSubItem
              icon={faDatabase}
              label='Database'
              isActive={activeSection === "databaseStats"}
              onClick={() => setActiveSection("databaseStats")}
            />
          </SidebarDropdown>
          <SidebarDropdown icon={faCog} label='Manage'>
            <SidebarSubItem
              icon={faUsers}
              label='Users'
              isActive={activeSection === "manageUsers"}
              onClick={() => setActiveSection("manageUsers")}
            />
            <SidebarSubItem
              icon={faDatabase}
              label='Database'
              isActive={activeSection === "manageDatabase"}
              onClick={() => setActiveSection("manageDatabase")}
            />
          </SidebarDropdown>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;

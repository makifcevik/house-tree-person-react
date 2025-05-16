import {
  faHome,
  faUserAlt,
  faCog,
  faBars,
  faChartBar,
  faDatabase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";
import { Typography } from "../ui/Typography";
import SidebarDropdown from "./SidebarDropdown";
import SidebarSubItem from "./SidebarSubItem";
import { useNavigate } from "react-router-dom";
import ROUTES from "@/routes/routes";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <nav
      className='dark:bg-input/20 border-r-2 flex flex-col transition-width duration-300 ease-in-out py-6 px-4'
      style={{ width: isSidebarOpen ? 240 : 0 }} // wider when open, narrow when closed
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
            <SidebarSubItem icon={faUserAlt} label='User' />
            <SidebarSubItem icon={faDatabase} label='Database' />
          </SidebarDropdown>
          <SidebarDropdown icon={faCog} label='Manage'>
            <SidebarSubItem icon={faUsers} label='Users' />
            <SidebarSubItem icon={faDatabase} label='Database' />
          </SidebarDropdown>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;

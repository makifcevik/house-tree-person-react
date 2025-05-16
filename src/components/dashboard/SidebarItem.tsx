import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Typography } from "../ui/Typography";

interface Props {
  icon: IconDefinition;
  label: string;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, onClick }: Props) => {
  return (
    <li
      className='flex items-center gap-4 px-3 py-2 hover:bg-accent cursor-pointer rounded-2xl'
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
      <Typography variant='p'>{label}</Typography>
    </li>
  );
};

export default SidebarItem;

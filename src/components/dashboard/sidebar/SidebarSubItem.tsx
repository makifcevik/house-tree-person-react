import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Typography } from "../../ui/Typography";

interface Props {
  icon: IconDefinition;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const SidebarSubItem = ({ icon, label, onClick, isActive }: Props) => {
  return (
    <li
      className={`py-2 px-3 flex items-center gap-2 ${
        isActive ? "bg-accent" : ""
      } hover:bg-accent cursor-pointer rounded-2xl`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
      <Typography variant='p'>{label}</Typography>
    </li>
  );
};

export default SidebarSubItem;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontawesomeObject, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Typography } from "../ui/Typography";

interface Props {
  icon: IconDefinition;
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SidebarDropdown = ({ icon, label, children, defaultOpen = true }: Props) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        onClick={toggle}
        className='flex items-center justify-between px-3 py-2 hover:bg-accent cursor-pointer rounded-2xl'
      >
        <div className='flex items-center gap-4'>
          <FontAwesomeIcon icon={icon} />
          <Typography variant='p'>{label}</Typography>
        </div>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>

      {isOpen && <ul className='pl-6 transition-all'>{children}</ul>}
    </div>
  );
};

export default SidebarDropdown;

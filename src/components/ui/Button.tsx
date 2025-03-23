import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  className?: string;
  icon?: IconDefinition;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const Button = ({ className, icon, label, onClick, children }: Props) => {
  return (
    <button onClick={onClick} aria-label={label || "Button"} className={className}>
      {icon && <FontAwesomeIcon icon={icon} className='mr-2' />}
      {label && <span>{label}</span>}
      {children}
    </button>
  );
};

export default Button;

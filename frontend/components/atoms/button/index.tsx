import * as React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  href?: string;
  variant?: "contained" | "outlined" | "text";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const Buttons = (props: ButtonProps) => {
  return (
    <>
      <Button
        variant={props.variant}
        href={props.href}
        style={props.style}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        data-testid='button'
      >
        {props.children}
      </Button>
    </>

    
  );
};

export default Buttons;

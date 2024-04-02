import { ReactNode } from "react";

export interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  width?: string;
  padding?: string;
  onClick?: () => void;
  children?: ReactNode;
  icon?: ReactNode;
}

import path from "path";

export interface IBaseButtonProps {
  type: "default" | "icon";
  variation: "default" | "ghost" | "link";
  icon?: any;
  path?: string;
  isActive?: boolean;
}

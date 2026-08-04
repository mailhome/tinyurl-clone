import type { LucideIcon } from "lucide-react";



export interface NavbarSubmenu {
  label: string;
  sub_links: NavbarSublinks[];
}

export interface NavbarProps {
    label: string;
    href?: string;
    submenu?: NavbarSubmenu;
}

export interface NavbarSublinks {
  
  label: string;
  icon: LucideIcon,
  desc: string;
  href: string;
}

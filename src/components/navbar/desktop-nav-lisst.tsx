import { useState } from "react";
import type { NavbarProps } from "../types/navigation-types";
import { AnimatePresence } from "framer-motion";
import DesktopMegaMenu from "./desktop-mega-menu";


type Props = {
    item: NavbarProps;
}

export default function DesktopNavList({ item }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
    className="relative"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
    >
      {item.href ? (
        <a href={item.href} className="text-base text-white hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer">
            {item.label}
        </a>
      ) 
      : (
        <button className="text-base text-white hover:text-white transition-colors duration-300  cursor-pointer">
          {item.label}
        </button>
      )}

      <AnimatePresence>
        {isOpen && item.submenu && (
            <DesktopMegaMenu submenu = {item.submenu} />
            )}
      </AnimatePresence>
        
    </div>
  )
}

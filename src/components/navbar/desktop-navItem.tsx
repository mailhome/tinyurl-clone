import { navigationLinks } from "../constants/navigation";
import DesktopNavList from "./desktop-nav-lisst";


export default function DesktopNavItem() {
  return (
    <div className='flex items-center justify-center gap-x-6'>
        {navigationLinks.map((item) => (
            <DesktopNavList 
            key={item.label} 
            item = {item}
             />
        ))}
        
    </div>
  )
}

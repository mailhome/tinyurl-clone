import DesktopNavigation from "./desktop-naviagtion";
import MobileNaviagtion from "./mobile-navigation";


export default function NavbarEdited () {
  return (
    <header className="bg-linear-to-r from-[#387592] to-[#132D4C] text-white">
      <div className="mx-auto h-16 container px-5 py-3">
        <MobileNaviagtion />
        <DesktopNavigation />
      </div> 
    </header>
  );
}
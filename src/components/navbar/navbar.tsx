import { Link } from "@tanstack/react-router"
import { navigationLinks } from "../constants/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";



const Navbar = () => {
  const [hoverContent, setHoverContent] = useState<string | null>(null);
  return (
    <header className="top-0 relative bg-linear-to-r from-[#387592] to-[#132D4C] xl:px-14 w-full py-4 h-auto  overflow-x-clip">
      <div className="flex relative items-center justify-between w-full text-white ">
        
        {/* Left Navbar */}
        <div className="flex  justify-center items-center xl:gap-x-32 lg:gap-x-20">
          {/*  Logo */}
          <Link to="/" className="uppercase xl:text-2xl  lg:text-4xl md:text-xl font-black">
            <span>tinyurl</span>
          </Link>

          {/* Navigation links */}
          <div className="flex items-center relative group gap-x-10 justify-center">
            {navigationLinks.map((item) => (
              <div
                key={item.href ?? item.label}
                className="hover:underline underline-offset-4">
                {item.href ?
                  <Link to={item.href ?? "/"}>
                    {item.label}
                  </Link> :
                  <div className="group relative cursor-pointer"
                    onMouseEnter={() => setHoverContent(item.label)}
                    onMouseLeave={() => setHoverContent(null)}>
                      <span>
                        {item.label}
                      </span>

                    {/* TODO: Authentication links */}
                      {item.submenu && hoverContent === item.label && (
                        <div className={cn("bg-white text-black/80 top-full absolute w-screen pt-3  h-auto -left-96 py-2 xl:px-14 pb-6", item.label === "Resources" && "-left-148")}>
                        <div className="grid grid-cols-12 ">
                          <div className="col-span-3 text-3xl font-semibold text-center">
                            {item.submenu.label}
                          </div>
                          <div className="col-span-9 w-full ">
                            <div className="grid  grid-cols-3 gap-y-4 gap-x-10 w-full">
                              {item.submenu.sub_links.map((link, index) => (
                                <div key={index} className="flex items-start justify-center gap-x-4  w-full hover:bg-blue-100 p-4">
                                  <link.icon className="h-7 w-7 strke-black" />
                                  <Link to={link.href} className="flex flex-col items-start justify-start gap-y-1 ">
                                    <h3 className="capitalize text-lg font-semibold">{link.label}</h3>
                                    <p>{link.desc}</p>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Right Navbar */}
      </div>
    </header>
  )
}

export default Navbar



// export default function MegaMenu () {
//   return (
//     <div>
//       {navigationLinks.map((item) => (
//           <div className="w-full" key={item.href ?? item.label}>
//             {item.submenu?.label && (
//               <div className="bg-white text-black/80 top-full  absolute w-screen h-auto -left-100 py-4 xl:px-14 pb-6">
//                 <div className="grid grid-cols-12 ">
                  
//                   <div className="col-span-3">
//                     {item.submenu.label}
//                   </div>
//                   <div className="col-span-9 w-full ">
//                     <div className="grid  grid-cols-3 gap-y-4 gap-x-10 w-full">
//                       {item.submenu.sub_links.map((link, index) => (
//                         <div key={index} className="flex items-start justify-center gap-x-4  w-full hover:bg-blue-100 p-4">
//                           <link.icon className="h-7 w-7 strke-black"  />
//                           <Link to={link.href} className="flex flex-col items-start justify-start gap-y-1 ">
//                             <h3 className="capitalize text-lg font-semibold">{link.label}</h3>
//                             <p>{link.desc}</p>
//                           </Link>
//                         </div> 
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//     </div>
//   )
// }

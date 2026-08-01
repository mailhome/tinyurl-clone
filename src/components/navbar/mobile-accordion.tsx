import { useState } from "react"
import type { navigationLinks } from "../constants/navigation"
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";


type Props = { 
    items: typeof navigationLinks
}

export default function MobileAccordion ({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.label} className="border-b text-2xl border-gray-200">
                {item.submenu ? (
                    <div onClick={() => setOpenIndex(openIndex === item.label ? null : item.label)} className="flex items-center text-base justify-between">
                        <button
                        type="button"
                        className="w-full text-left px-4 py-2 text-base font-medium text-gray-700 ">
                        {item.label}
                    </button>
                    <div>
                        {openIndex === item.label ? (
                            <ChevronDown className="h-6 w-6 font-bold  text-black" />
                        ) : (<ChevronUp className="h-6 w-6 font-bold text-black" />)}
                    </div>
                    </div>     
                ) : (
                    <a href={item.href} className="block px-4 py-2 text-base font-medium text-gray-700 cursor-pointer hover:underline active:underline underline-offset-4">
                        {item.label}
                    </a>
                )}

                <AnimatePresence initial={false}>
                {openIndex === item.label && item.submenu && (
                    <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                        <div className="space-y-2 pl-5 pb-5">
                        {item.submenu.sub_links.map((subItem) => (
                            <a 
                            key={subItem.label} 
                            href={subItem.href} 
                            className="flex gap-3 rounded-lg p-3 hover:bg-slate-100">
                                <subItem.icon className="mt-1 h-5 w-5" />
                                <div className="">
                                    <h4 className="font-medium text-sm">{subItem.label}</h4>
                                     <p className="text-sm text-gray-500">
                                        {subItem.desc}
                                    </p>
                                </div>
                            </a>
                        ))}
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
      ))}
    </div>
  )
}

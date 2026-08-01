
import { motion } from 'framer-motion'
import type { NavbarSubmenu } from '../types/navigation-types'
import { cn } from '@/lib/utils'

type Props = {
  submenu: NavbarSubmenu
}

export default function DesktopMegaMenu ({ submenu }: Props) {
  return (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 15 }}
    transition={{ duration: 0.3 }}
    className={cn("absolute -left-92 top-full z-50 mt-4 w-screen  rounded-2xl bg-white p-8 text-black shadow-2xl", submenu.label === "Resources" && "-left-132")}>
        <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <h2 className="text-3xl font-bold">
            {submenu.label}
          </h2>
        </div>

        <div className="col-span-9 grid grid-cols-3 gap-4">
          {submenu.sub_links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex gap-4 rounded-xl p-4 transition hover:bg-slate-100"
            >
              <link.icon className="mt-1 h-6 w-6" />

              <div>
                <h3 className="font-semibold">
                  {link.label}
                </h3>

                <p className="text-sm text-gray-500">
                  {link.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
  </motion.div>
  )
}

import { useState } from 'react'
import Logo from './logo'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
import LogoBlue from './logo-blue'
import MobileAccordion from './mobile-accordion'
import { navigationLinks } from '../constants/navigation'
import AuthNavigation from './auth-navigation'

export default function MobileNaviagtion() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='lg:hidden'>
        <div className="flex items-center justify-between">
            <Logo />
            <div className="cursor-pointer">
                <Sheet onOpenChange={setMenuOpen} open={menuOpen}>
                    <SheetTrigger className="cursor-pointer">
                        <Menu className="h-6 w-6 text-white" />
                    </SheetTrigger>
                    <SheetContent className="min-h-screen bg-[#F5F5F6] flex flex-col  w-full md:px-10 items-start justify-start" side="right">
                        <SheetHeader className="flex items-center px-5 justify-center">
                            <LogoBlue />
                        </SheetHeader>
                        <SheetDescription className="w-full px-5">
                            <MobileAccordion items={navigationLinks} />
                        </SheetDescription>
                        <SheetFooter className='w-full bottom-0 sticky py-2 bg-gray-100 border-t border-neural-200 z-20'>
                            <AuthNavigation />
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </div>
  )
}

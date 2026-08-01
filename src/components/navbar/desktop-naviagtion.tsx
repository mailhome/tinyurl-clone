
import AuthNavigation from './auth-navigation'
import Logo from './logo'
import DesktopNavItem from './desktop-navItem'

export default function DesktopNavigation () {
  return (
    <div className="hidden lg:flex items-center justify-between space-x-6">
      {/* Left Desktop Navigation */}
      <div className="flex justify-center items-center xl:gap-x-20 lg:gap-x-12">
        <Logo />
        <DesktopNavItem />
      </div>

      {/* Right Desktop Navigation */}
      <AuthNavigation />
    </div>
  )
}

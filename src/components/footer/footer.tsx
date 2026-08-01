
import { Link } from '@tanstack/react-router'
import { contact, features, icon, legal, resources } from '../constants/footer'

export default function Footer() {
  return (
    <footer className='bottom-0 relative bg-linear-to-r from-[#387592] to-[#132D4C] 2xl:px-40 xl:px-30 lg:px-20 md:px-10 px-5 md:px-10 w-full py-4 h-auto pb-20  overflow-x-clip'>
        {/* Deskop Footer */}
        <div className="hidden pt-8 lg:grid lg:grid-cols-12 grid-cols-2 w-full">
            {/* Left side of footer */}
            <div className="xl:col-span-9 w-full grid xl:grid-cols-4  ">
                {/* Features */}
                <div className="hidden lg:flex flex-col items-start justify-start xl:gap-y-6">
                    <span className='text-white font-bold xl:text-2xl'>Features</span>
                    <div className="flex flex-col items-start justify-start xl:gap-y-3">
                        {features.map((link, index) => (
                            <Link className='text-white hover:underline underline-offset-4 active:underline font-medium' key={index} to={link.href}>
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Resources */}
                <div className="hidden lg:flex flex-col items-start justify-start xl:gap-y-6">
                    <span className='text-white font-bold xl:text-2xl'>Resources</span>
                    <div className="flex flex-col items-start justify-start xl:gap-y-3">
                        {resources.map((link, index) => (
                            <Link className='text-white hover:underline underline-offset-4 active:underline font-medium' key={index} to={link.href}>
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact us */}
                <div className="flex flex-col items-start justify-start xl:gap-y-6">
                    <span className='text-white font-bold xl:text-2xl'>Contact Us</span>
                    <div className="flex flex-col items-start justify-start xl:gap-y-3">
                        {contact.map((link, index) => (
                            <Link className='text-white hover:underline underline-offset-4 active:underline font-medium' key={index} to={link.href}>
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Legal */}
                <div className="flex flex-col items-start justify-start xl:gap-y-6">
                    <span className='text-white font-bold xl:text-2xl'>Legal</span>
                    <div className="flex flex-col items-start justify-start xl:gap-y-3">
                        {legal.map((link, index) => (
                            <Link className='text-white hover:underline underline-offset-4 active:underline font-medium' key={index} to={link.href}>
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side of Footer */}
            <div className="col-span-3 flex items-end justify-end  gap-y-3">
                <div className="flex flex-col items-end justify-end">
                    <div className="flex items-center justify-center xl:gap-x-4 ">
                        {icon.map((icon, i) => (
                            <a key={i} href={icon.href}>
                                <icon.icon className='text-white xl:text-xl' />
                            </a>
                        ))}
                    </div>
                    {/*  Logo */}
                    <Link to="/" className="uppercase xl:text-4xl  lg:text-3xl md:text-xl font-black text-white xl:mt-6">
                        <span>tinyurl</span>
                    </Link>
                    <p className="text-white mt-4">
                        &copy; 2026 Tinyurl LLC
                    </p>
                    <div className="text-white">
                        All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden py-8">
            {/* Top of the mobile footer */}
            <div className="grid grid-cols-2 w-full">
                {/* Contact us */}
                <div className="flex flex-col items-start justify-start gap-y-6">
                    <span className='text-white font-bold xl:text-2xl'>Contact Us</span>
                    <div className="flex flex-col items-start justify-start gap-y-2">
                        {contact.map((link, index) => (
                            <Link className='text-white hover:underline underline-offset-4 active:underline font-medium text-sm lg:text-md' key={index} to={link.href}>
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Legal */}
                <div className="flex flex-col items-start justify-start gap-y-6">
                    <span className='text-white font-bold xl:text-2xl'>Legal</span>
                    <div className="flex flex-col items-start justify-start gap-y-2">
                        {legal.map((link, index) => (
                            <Link className='text-white text-sm lg:text-md hover:underline underline-offset-4 active:underline font-medium' key={index} to={link.href}>
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Boottom Footer */}
            <div className="flex items-start justify-start flex-col mt-10">
                <div className="flex flex-col items-start justify-start">
                    <div className="flex items-center justify-center gap-x-4 ">
                        {icon.map((icon, i) => (
                            <a key={i} href={icon.href}>
                                <icon.icon className='text-white lg:text-2xl text-2xl' />
                            </a> 
                        ))}
                    </div>
                    {/*  Logo */}
                    <Link to="/" className="uppercase xl:text-4xl  lg:text-3xl md:text-xl text-3xl font-black text-white mt-6">
                        <span>tinyurl</span>
                    </Link>
                    <p className="text-white text-md mt-4">
                        &copy; 2026 Tinyurl LLC
                    </p>
                    <div className="text-white text-md">
                        All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

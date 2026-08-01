import { CheckCircle, CodeXml, FolderCode, Gem, Info, Link, List, NotepadText, Pencil, QrCode } from "lucide-react"
import type { NavbarProps } from "../types/navigation-types"

export const navigationLinks: NavbarProps[]  = [
    {
        label: "Plans",
        href: "/pricing"
    },
    {
        label: "Features",
        submenu: {
            label: "Features",
            sub_links: [
                {
                    label: "Link Editor",
                    icon: Pencil,
                    desc: "Keep all ypor links dynamic, and extend their value in the lon run",
                    href: "/features/custom-link"
                },
                {
                    label: "Branded Links",
                    icon: Link, 
                    desc: "Turn heads and hold attention with fully custom short links",
                    href: "/features/branded-links"
                }, 
                {
                    label: "QR Code Generator",
                    icon: QrCode,
                    desc: "Elevate your customer experiences with dynamic scannable codes",
                    href: "/features/qr-generator"
                },
                {
                    label: "Link Management",
                    icon: List,
                    desc: "Organize as many links as you need with our powerful intuitive platform",
                    href: "/features/link-management"
                },
                {
                    label: "Short URL Tracking",
                    icon: Gem,
                    desc: "Measure the success of your efforts and make smarter data-driven choices",
                    href: "/features/link-analysis"
                },
                {
                    label: "Short URL API",
                    icon: CodeXml,
                    desc: "Build powerful apps and qautomations with our link shortening API",
                    href: "/features/short-url-api"
                }
            ]
        }
    }, 
    {
        label: "Domains",
        href: "/domains"
    }, 
    {
        label: "Resources", 
        submenu: {
            label: "Resources",
            sub_links: [
                {
                    label: "Blog",
                    icon: NotepadText,
                    desc: "Read the latest tips and tricks from the top experts in link shortening", 
                    href: "/blog"
                },
                {
                    label: "For Developers",
                    icon: FolderCode,
                    desc: "Power your apps and software with automated, fully custom URL shortnening",
                    href: "/dev"
                },
                {
                    label: "Our proven process",
                    icon: CheckCircle,
                    desc: 'Learn how our customers go from zero to hero with our link management tools', 
                    href: "/proven-process"
                },
                {
                    label: "About us",
                    icon: Info, 
                    desc: "Learn about Tinyurl's journey as the first link shortner",
                    href: "/about-us"
                }
            ]
        }
    }
]
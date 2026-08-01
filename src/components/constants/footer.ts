

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons/lib";

interface FeaturesProps {
    label: string;
    href: string;
}

interface IconsProps {
    icon: IconType;
    href: string;

}

export const features: FeaturesProps[] = [
    {
        label: 'Link Editor',
        href: "/features/custom-links"
    },
    {
        label: 'Link Management',
        href: "/features/link-management"
    },
    {
        label: 'Branded Links',
        href: "/features/branded-links"
    },
    {
        label: 'Short URL Tracking',
        href: "/features/link-analytics"
    },
    {
        label: 'QR Code Generator',
        href: "/features/qr-code-generator"
    },
    {
        label: 'Short URL API',
        href: "/features/url-shortner-api"
    },
]

export const resources: FeaturesProps[] = [
    {
        label: 'Blog',
        href: "/app/blog"
    },
    {
        label: 'For Developers',
        href: "/app/dev"
    },
    {
        label: 'Our Proven Process',
        href: "/app/proven-process"
    },
    {
        label: 'About',
        href: "/app/about-us"
    },
    
]

export const contact: FeaturesProps[] = [
    {
        label: 'Help Desk',
        href: "/app/help-desk"
    },
    {
        label: 'Contact Sales',
        href: "/app/freescout"
    },
    {
        label: 'Contact Support',
        href:  "/app/freescout"
    },
    {
        label: 'Report Abuse',
        href:  "/app/freescout"
    },
    
]

export const legal: FeaturesProps[] = [
    {
        label: 'Terms of Service',
        href: "/app/terms"
    },
    {
        label: 'Provicy Policy',
        href: "/app/privacy-policy"
    },
    {
        label: 'Cookies Policy',
        href:  "/app/cookies-policy"
    },
    {
        label: 'Accessibility Statement',
        href:  "/app/accessibility"
    },
    {
        label: 'Privcy Manager',
        href:  "/app/accessibility"
    },
    
]

export const icon: IconsProps[] = [
    {
        icon: FaFacebookF,
        href: "https://www.facebook.com/p/TinyURL-100063912786274/"
    }, 

    {
        icon: FaInstagram,
        href: "https://www.instagram.com/tinyurl_official/"
    }, 

    {
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/company/tinyurl"
    }, 

    {
        icon: FaXTwitter,
        href: "https://x.com/tinyurl"
    }, 
]
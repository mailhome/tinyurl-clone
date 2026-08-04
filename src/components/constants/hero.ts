import { FaGlobe, FaLink, FaLocationArrow, FaPenFancy, FaQrcode } from "react-icons/fa6";
import { GiIcePop } from "react-icons/gi";
import type { HeroLeftProps, HeroRightProps, DomainOptionProps } from "../types/hero";

export const heroLeftData: HeroLeftProps[] = [
    {
        heading: `URL Shortener, Branded Short Links & Analytics`,
        description: "Welcome to the original link shortener — simplifying the Internet through the power of the URL since 2002.\n\n        You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans",
        buttonViewText: "View Plans",
        buttonViewUrl: "/pricing",
        buttonCreateText: "Create Free Account",
        buttonCreateUrl: "/register",
    }
]

export const heroRightData: HeroRightProps[] = [
    {
        id: "shorten",
        topHeading: "Shorten your link",
        topHeadingIcon: FaLink ,
        buttonText: "Shorten Link",
        urlString: "Long URL",
        urlStringIcon: FaLocationArrow,
        domainHeading: "Domain",
        domainIcon: FaGlobe ,
        aliasText: "Alias",
        aliasIcon: FaPenFancy
    },

    {
        id: "qr",
        topHeading: "Generate QR Code",
        topHeadingIcon: FaQrcode ,
        buttonText: "Destination URL",
        urlString: "Destination URL",
        urlStringIcon: GiIcePop,
        domainHeading: "Domain",
        domainIcon: FaGlobe ,
        aliasText: "Alias",
        aliasIcon: FaPenFancy
    },
];

export const DOMAINS: DomainOptionProps[] = [
  { value: "tinyurl.com", label: "tinyurl.com" },
  { value: "tiny.cc", label: "tiny.cc" },
  { value: "rb.gy", label: "rb.gy" },
];


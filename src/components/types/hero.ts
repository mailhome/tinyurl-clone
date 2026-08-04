import type { IconType } from "react-icons/lib";

export type TabId = "shorten" | "qr"

export interface HeroLeftProps {
    heading: string;
    description: string;
    buttonViewText: string;
    buttonViewUrl: string;
    buttonCreateText: string;
    buttonCreateUrl: string;
}

export interface HeroRightProps {
    id: TabId;
    topHeading: string;
    topHeadingIcon: IconType;
    buttonText: string;
    urlString: string;
    urlStringIcon: IconType;
    domainHeading: string;
    domainIcon: IconType;
    aliasText: string;
    aliasIcon: IconType;
}

export interface DomainOptionProps {
    value: string;
    label: string;
}
    
import { theme } from '../constants/theme';

export type SocialNetworksType = {
    label: string;
    icon: string;
    link: string;
    sortIndex: number;
};
               
export type PageDataType = {
    headline: string[];
    identifier: string;
    socialNetworks: SocialNetworksType[];
    title: string;
};

export interface AppContextType {
    pageData: PageDataType | null;
    setPageData: React.Dispatch<React.SetStateAction<PageDataType | null>>;
};

type TitleColorsType = {
    red: string;
    purple: string;
    green: string;
    blue: string;
    orange: string;
    yellow: string;
    pink: string;
};

export type ThemeVariantType = {
    background: string;
    link: string;
    linkHover: string;
    linkBorder: string;
    linkBorderHover: string;
    text: string;
    title: TitleColorsType;
};

type ThemeType = {
    dark: ThemeVariantType;
    light: ThemeVariantType;
};


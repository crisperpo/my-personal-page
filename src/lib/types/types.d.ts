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
}

export interface AppContextType {
    theme: string;
    setTheme: (theme: string) => void;
    pageData: PageDataType | null;
    
    setPageData: React.Dispatch<React.SetStateAction<PageDataType | null>>;
};
export type SocialNetworksType = {
    label: string;
    icon: string;
    link: string;
    sortIndex: number;
};

export type PageDataType = {
    headline: string[];
    identifier: string;
    title: string;
    socialNetworkCollection: {
        items: socialNetworksType[];
    };
};

export interface AppContextType {
    theme: string;
    setTheme: (theme: string) => void;
    pageData: PageDataType | null;
    
    setPageData: React.Dispatch<React.SetStateAction<PageDataType | null>>;
};

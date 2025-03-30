import { createContext, useState, ReactNode } from 'react';

import type { AppContextType, PageDataType } from '../lib/types/types.d';

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode}) => {
    const [theme, setTheme] = useState('light');
    const [pageData, setPageData] = useState<PageDataType | null>(null);

    return (
        <AppContext.Provider value={{ theme, setTheme, pageData, setPageData }}>
            {children}
        </AppContext.Provider>
    );
};

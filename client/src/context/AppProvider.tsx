import {  useState, ReactNode } from 'react';

import { AppContext } from './AppContext';
import type { PageDataType } from '../lib/types/types.d';

export const AppProvider = ({ children }: { children: ReactNode}) => {
    const [theme, setTheme] = useState('light');
    const [pageData, setPageData] = useState<PageDataType | null>(null);

    return (
        <AppContext.Provider value={{ theme, setTheme, pageData, setPageData }}>
            {children}
        </AppContext.Provider>
    );
};

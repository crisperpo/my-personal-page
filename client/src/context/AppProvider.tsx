import { useState, ReactNode } from 'react';

import { AppContext } from './AppContext';
import useDetectDarkModeAndReload from '../hooks/useDetectDarkModeAndReload';

import type { PageDataType } from '../lib/types/types.d';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    useDetectDarkModeAndReload();
    const [pageData, setPageData] = useState<PageDataType | null>(null);

    return (
        <AppContext.Provider value={{ pageData, setPageData }}>
            {children}
        </AppContext.Provider>
    );
};

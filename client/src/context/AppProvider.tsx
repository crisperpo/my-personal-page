import { useState, ReactNode } from 'react';

import { AppContext } from './AppContext';
import useDetectDarkModeAndReload from '../hooks/useDetectDarkModeAndReload';
import themes from '../lib/constants/theme';

import type { PageDataType } from '../lib/types/types.d';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const isDarkMode = useDetectDarkModeAndReload();
    const [pageData, setPageData] = useState<PageDataType | null>(null);
    const theme = isDarkMode ? themes.dark : themes.light;

    return (
        <AppContext.Provider value={{ pageData, setPageData, theme }}>
            {children}
        </AppContext.Provider>
    );
};

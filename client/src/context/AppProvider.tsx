import { useState, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { AppContext } from './AppContext';
import theme from '../lib/constants/theme';
import type { PageDataType } from '../lib/types/types.d';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [pageData, setPageData] = useState<PageDataType | null>(null);

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{ pageData, setPageData }}>
                {children}
            </AppContext.Provider>
        </ThemeProvider>
    );
};

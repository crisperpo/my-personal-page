import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import type { ThemeType } from '../lib/types/types';

const useTheme = (): ThemeType => {
    const { theme } = useContext(AppContext) || {};
    return theme;
};

export default useTheme;

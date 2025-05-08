import { createContext } from 'react';

import type { AppContextType } from '../lib/types/types.d';

export const AppContext = createContext<AppContextType | undefined>(undefined);

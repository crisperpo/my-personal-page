import '@testing-library/jest-dom';
import { expect, vi } from 'vitest';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import React from 'react';

import mockContentfulData from './mockContentfulData.json';

expect.addSnapshotSerializer(styleSheetSerializer)
const { headline, socialNetworks, title } = mockContentfulData;


vi.mock('react', async () => {
    const actualReact = await vi.importActual('react');
    return {
        ...actualReact,
        useContext : vi.fn(() => ({
            pageData: {
                headline: [headline[0], headline[1], headline[2]],
                title,
                socialNetworks,
            }
        }))
    };
});
vi.mock('styled-components', async () => {
    const actual = await vi.importActual<typeof import('styled-components')>('styled-components');
  
    return {
        ...actual,
        useTheme: () => ({
            mode: 'dark',
            title: {
                red: '#E21E25',
                purple: '#7251A2',
                green: '#BED431',
                blue: '#5ECAE6',
                orange: '#FE4419',
                yellow: '#F6C715',
                pink: '#F11AA8', 
            },
            ThemeProvider: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
        }),
    };
  });

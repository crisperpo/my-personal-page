import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

import mockContentfulData from './mockContentfulData.json';

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
            background: '#111',
            link: '#999',
            linkHover: '#777',
            linkBorder: '#BBB',
            linkBorderHover: '#888',
            text: '#B0B0B0',
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

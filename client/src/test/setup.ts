import '@testing-library/jest-dom';
import { vi } from 'vitest';

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

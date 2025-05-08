import { describe, it, expect } from 'vitest';
import { act, render } from '@testing-library/react';
import { vi } from 'vitest';

import App from './index';
import mockContentfulData from '../../test/mockContentfulData.json';

vi.mock('../../services/fetchHomePageData', () => ({
    default: vi.fn(() => Promise.resolve(mockContentfulData)),
}));

describe('App Page', () => {
    it('renders correctly', async () => {
        await act(async () => {
            render(<App />);
        });
    });
    it('matches the snapshot', async () => {
        await act(async () => {
            const { asFragment } = render(<App />);
            expect(asFragment()).toMatchSnapshot();
        });
    });
});

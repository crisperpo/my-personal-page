import Letter from './index';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import themes from '../../lib/constants/theme';

// Mocks
vi.mock('../../hooks/useTheme', () => ({
    default: vi.fn().mockReturnValue(themes.light)
}));

const MOCK_LETTER = 'A';

describe('Letter Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it('should render correctly', () => {
        render(
            <Letter letter={MOCK_LETTER} position={0} />
        );
    });
    it('should contain the class "letter"', () => {
        render(
            <Letter letter={MOCK_LETTER} position={0} />
        );
        const letterElement = screen.getByText(MOCK_LETTER).closest('div');
        expect(letterElement).toHaveClass('letter');
    });
    it('should contain the class "hovered" when isHovered is true', () => {
        vi.mock('react', async () => {
            const actualReact = await vi.importActual('react');
            return {
                ...actualReact,
                useState: vi.fn().mockImplementation(() => [true, vi.fn()]),
            };
        });

        render(<Letter letter={MOCK_LETTER} position={0} />);
        const letterElement = screen.getByText(MOCK_LETTER).closest('div');
        expect(letterElement).toHaveClass('hovered');
    });
    it('should render a div containing the letter with the correct color', () => {
        const MOCK_POSITION = 1;
        const colorKeys = Object.values(themes.light.title);
        const color = colorKeys[MOCK_POSITION % colorKeys.length];
        render(
            <Letter letter={MOCK_LETTER} position={MOCK_POSITION} />
        );
        const letterDiv = screen.getByText(MOCK_LETTER).closest('div');
        expect(letterDiv).toHaveStyle(`color: ${color}`);
    });
    it('matches the snapshot', () => {
        const { asFragment } = render(
            <Letter letter={MOCK_LETTER} position={0} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

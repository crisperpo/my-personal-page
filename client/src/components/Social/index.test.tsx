import Social from './index';
import { render } from '@testing-library/react';

describe('Social Component', () => {
    it('renders correctly', () => {
        render(<Social />);
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<Social />);
        expect(asFragment()).toMatchSnapshot();
    });
});

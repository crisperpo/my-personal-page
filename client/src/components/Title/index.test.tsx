import { render } from '@testing-library/react';

import Title from './index';

describe('Title Component', () => {
    it('renders correctly', () => {
        render(<Title />);
    });
    it('matches the snapshot', () => {
        const { asFragment } = render(<Title />);
        expect(asFragment()).toMatchSnapshot();
    });
});

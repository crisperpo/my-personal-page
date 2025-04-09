import { render, screen } from '@testing-library/react';
import Headline from './index';
import { headline } from '../../test/mockContentfulData.json';

const [headline1, headline2, headline3] = headline;

describe('Headline Component', () => {
    it('renders correctly', () => {
        render(<Headline />);
    });
    it('renders headlines correctly', () => {
        render(<Headline />);
        expect(screen.getByText(`${headline1} · ${headline2} · ${headline3}`)).toBeInTheDocument();
    });
    it('matches the snapshot', () => {
        const { asFragment } = render(<Headline />);
        expect(asFragment()).toMatchSnapshot();
    });
});

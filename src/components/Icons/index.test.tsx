import { render } from '@testing-library/react';
import Icons from './index';

describe('Icons Component', () => {
    it('should match the snapshot for BlueskyIcon', () => {
        const { container } = render(<Icons.BlueskyIcon />);
        expect(container).toMatchSnapshot();
    });

    it('should render BlueskyIcon correctly', () => {
        const { container } = render(<Icons.BlueskyIcon />);
        expect(container).toMatchSnapshot();
    });

    it('should render GithubIcon correctly', () => {
        const { container } = render(<Icons.GithubIcon />);
        expect(container).toBeInTheDocument();
    });

    it('should render LinkedinIcon correctly', () => {
        const { container } = render(<Icons.LinkedinIcon />);
        expect(container).toBeInTheDocument();
    });

    it('should render MediumIcon correctly', () => {
        const { container } = render(<Icons.MediumIcon />);
        expect(container).toBeInTheDocument();
    });

    it('should render PinterestIcon correctly', () => {
        const { container } = render(<Icons.PinterestIcon />);
        expect(container).toBeInTheDocument();
    });
});

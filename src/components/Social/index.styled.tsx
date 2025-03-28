import styled from 'styled-components';
import colors from '../../lib/constants/colors';

const SocialContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
`;

const SocialLink = styled.a`
    color: ${colors.link};
    border: 1px solid ${colors.linkBorder};
    padding: 0.5rem;
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    text-decoration: none;

    &:hover, &:focus {
        border: 1px solid ${colors.linkBorderHover};
        color: ${colors.linkHover};
    }
`;

export {
    SocialContainer,
    SocialLink
};

import styled from 'styled-components';

const SocialContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
`;

const SocialLink = styled.a`
    color: ${({ theme }) => theme.link};
    border: 1px solid ${({ theme }) => theme.linkBorder};
    padding: 0.5rem;
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    text-decoration: none;

    &:hover, &:focus {
        border: 1px solid ${({ theme }) => theme.linkBorderHover};
        color: ${({ theme }) => theme.linkHover};
    }
`;

export {
    SocialContainer,
    SocialLink
};

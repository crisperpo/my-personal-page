import styled from 'styled-components';

const HeaderContainer = styled.div`
    align-items: center;
    color: ${({theme}) => theme.text};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
`;

export {
    HeaderContainer
};

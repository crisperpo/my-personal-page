import styled from 'styled-components';

const TitleContainer = styled.div`
    align-items: center;
    display: flex;
    font-family: 'Bebas Neue', sans-serif;
    flex-flow: column;
    font-size: calc(70px + 9vw);
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    line-height: calc(30px + 8vw);
    opacity: 0.7;
`;

const TitleLine = styled.div`
    display: flex;
    flex-direction: row;
`;

export {
    TitleContainer,
    TitleLine
};

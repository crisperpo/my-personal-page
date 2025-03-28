import styled, { keyframes } from 'styled-components';

const letterAnimation = keyframes`
    0% {
        top: 0;
    }
    50% {
        top: 0.2em;
    }
    100% {
        top: 0;
    }
`;

const LetterContainer = styled.div<{ color: string }>`
    color: ${(props) => props.color};
    mix-blend-mode: color-burn;
    transition: top ease 0.1s;
    transition-delay: 2s;
    position: relative;
    &:hovered {
        animation: ${letterAnimation} 3s;
    }
`;

export {
    LetterContainer
};

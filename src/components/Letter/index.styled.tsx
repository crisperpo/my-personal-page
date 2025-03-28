import styled from 'styled-components';
import colors from '../../lib/constants/colors';

const StyledLetterContainer = styled.div<{ color: string }>`
    color: ${(props) => props.color};
    mix-blend-mode: color-burn;
`;

const LetterContainer = ({position, children}: {position: number; children: React.ReactNode}) => {
    const colorKeys = Object.values(colors.title);
    const color = colorKeys[position % colorKeys.length];
    return (
        <StyledLetterContainer color={color}>{children}</StyledLetterContainer>
    );
};

export {
    LetterContainer
};

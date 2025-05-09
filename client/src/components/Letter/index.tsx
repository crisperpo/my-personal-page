import { useEffect, useRef, useState } from 'react';

import { LetterContainer } from './index.styled';
import './index.scss';
import { useTheme } from 'styled-components';

const Letter = ({ letter, position }: { letter: string, position: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const letterRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();
    useEffect(() => {
        const handleAnimationEnd = () => {
            setIsHovered(false);
        };
        const letter = letterRef.current;
        if (letter) {
            letter.addEventListener('animationend', handleAnimationEnd);
        }
        return () => {
            if (letter) {
                letter.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, []);
    const colorKeys = Object.values(theme.title);
    const color = colorKeys[position % colorKeys.length];

    const handleOnHover = () => {
        setIsHovered(true);
    };

    const letterClass = isHovered ? 'letter hovered' : 'letter';

    return (
        <LetterContainer
            className={letterClass}
            color={color}
            onMouseEnter={handleOnHover}
            onClick={handleOnHover}
            ref={letterRef}
        >
            {letter}
        </LetterContainer>
    );
};

export default Letter;

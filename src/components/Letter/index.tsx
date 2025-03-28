import { LetterContainer } from './index.styled';

const Letter = ({letter, position}: {letter: string, position: number}) => (
    <LetterContainer position={position}>
        {letter}  
    </LetterContainer>
);

export default Letter;

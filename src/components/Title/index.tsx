import content from '../../../lib/constants/content.json';
import { TitleContainer, TitleLine } from './index.styled';
import Letter from '../Letter';

const Title = () => {
    return (
        <TitleContainer>
            {content.title.split(' ').map((titleLine, indexLine) => (
                <TitleLine key={indexLine}>
                    {titleLine.split('').map((letter, indexLetter) => (
                        <Letter key={indexLetter} letter={letter} position={ indexLetter + indexLine } />
                    ))}
                </TitleLine>
            ))}
        </TitleContainer>
    );
};

export default Title;

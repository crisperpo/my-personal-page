import { useContext } from 'react';

import  { AppContext } from '../../context/AppContext';
import Letter from '../Letter';
import { TitleContainer, TitleLine } from './index.styled';

const Title = () => {
    const {pageData} = useContext(AppContext) || {};
    return (
        <TitleContainer>
            {pageData?.title.split(' ').map((titleLine: string, indexLine: number) => (
                <TitleLine key={indexLine}>
                    {titleLine.split('').map((letter: string, indexLetter: number) => (
                        <Letter key={indexLetter} letter={letter} position={ indexLetter + indexLine } />
                    ))}
                </TitleLine>
            ))}
        </TitleContainer>
    );
};

export default Title;

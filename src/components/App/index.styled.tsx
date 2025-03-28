import styled from 'styled-components';

import colors from '../../lib/constants/colors';

const HeaderContainer = styled.div`
    align-items: center;
    color: ${colors.textBody};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
`;

export {
    HeaderContainer
};

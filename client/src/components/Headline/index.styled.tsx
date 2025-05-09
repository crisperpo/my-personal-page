import styled from "styled-components";
import type { ThemeType } from "../../lib/types/types.d";

const HeadlineContainer = styled.span<{ theme: ThemeType }>`
    font-size: 1.2rem;
`;

export {
    HeadlineContainer
};

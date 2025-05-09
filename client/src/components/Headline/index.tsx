import usePageData from '../../hooks/usePageData';
import { HeadlineContainer } from './index.styled';

const Headline = () => {
    const pageData = usePageData();
    return (
        <HeadlineContainer>
            {pageData?.headline.join(' · ')}
        </HeadlineContainer>
    );
};

export default Headline;

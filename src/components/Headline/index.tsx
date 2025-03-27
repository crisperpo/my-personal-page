import content from '../../lib/constants/content.json';

const Headline = () => (
    <div>
        {content.headlines.join(' · ')}
    </div>
);

export default Headline;

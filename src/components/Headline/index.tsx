import content from '../../lib/constants/content.json';

const Headline = () => {
    return (
        <div>
            {content.headlines.join(' · ')}
        </div>
    );
};

export default Headline;

import { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

const Headline = () => {
    const { pageData } = useContext(AppContext) || {};
    return (
        <div>
            {pageData?.headline.join(' · ')}
        </div>
    );
};

export default Headline;

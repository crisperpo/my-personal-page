import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import type { PageDataType } from '../lib/types/types.d';

const usePageData = (): PageDataType | null | undefined => {
    const { pageData } = useContext(AppContext) || {};
    return pageData;
};

export default usePageData;

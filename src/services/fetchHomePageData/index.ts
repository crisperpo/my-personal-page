import { homePageQuery } from '../../queries';

import type { PageDataType } from '../../lib/types/types.d';

export default async () => {
    const contentfulSpaceId = import.meta.env.VITE_SPACE_ID;
    const contentfulAccessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${contentfulSpaceId}/`,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${contentfulAccessToken}`,
        },
        body: JSON.stringify({ query: homePageQuery }),
        }
    );
    
    const { data, errors } = await response.json();
    
    if (errors) {
        console.error(errors);
    }
    return ({
        ...data.pageCollection.items[0],
        socialNetworks: [...data.socialNetworkCollection.items].sort(
            (a, b) => a.sortIndex - b.sortIndex
        ),
    } as PageDataType);
};

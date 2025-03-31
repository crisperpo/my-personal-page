import apiClient from '../apiClient';

import type { PageDataType, SocialNetworksType } from '../../lib/types/types.d';

export default async (): Promise<PageDataType> => {
    const response = await apiClient.get('api/get-home-page-data');

    if (response.status !== 200) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const { data } = response;

    if (!data?.pageCollection?.items?.length) {
        throw new Error('No items found in pageCollection');
    }

    if (!data?.socialNetworkCollection?.items?.length) {
        throw new Error('No items found in socialNetworkCollection');
    }

    const { pageCollection, socialNetworkCollection } = data;

    return {
        ...pageCollection.items[0],
        socialNetworks: socialNetworkCollection.items.sort(
            (a: SocialNetworksType , b: SocialNetworksType) => a.sortIndex - b.sortIndex
        ),
    } as PageDataType;
};

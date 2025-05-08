import React,{ useContext } from 'react';

import { SocialContainer, SocialLink } from './index.styled';
import Icons from '../Icons';
import { AppContext } from '../../context/AppContext';

import type { SocialIconName } from './index.d';

const getSocialIcon = (iconName: SocialIconName): React.ReactElement => {
    const iconProps = {
        size: 32,
        weight: 'fill' as const
    };
    const socialIcons: Record<SocialIconName, React.ReactElement> = {
        linkedin: <Icons.LinkedinIcon {...iconProps} />,
        github: <Icons.GithubIcon {...iconProps} />,
        bluesky: <Icons.BlueskyIcon {...iconProps} />,
        medium: <Icons.MediumIcon {...iconProps} />,
        pinterest: <Icons.PinterestIcon {...iconProps} />
    };
    return socialIcons[iconName];
};

const Social = () => {
    const { pageData } = useContext(AppContext) || {};

    return (
        <SocialContainer>
            {pageData?.socialNetworks?.map((socialItem, indexSocialItem) => (
                <SocialLink
                    key={indexSocialItem}
                    href={socialItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={socialItem.label}
                >
                    { getSocialIcon(socialItem.icon as SocialIconName) }
                </SocialLink>
            ))}
        </SocialContainer>
    );
};

export default Social;

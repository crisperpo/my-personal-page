import content from '../../lib/constants/content.json';
import { SocialContainer, SocialLink } from './index.styled';
import Icons from '../Icons';

import type { SocialIconName } from './index.d';

const getSocialIcon = (iconName: SocialIconName) : JSX.Element => {
    const iconProps = {
        size: 32,
        weight: 'fill'
    };
    const socialIcons: Record<typeof iconName, JSX.Element> = {
        linkedin: <Icons.LinkedinIcon {...iconProps} />,
        github: <Icons.GithubIcon {...iconProps} />,
        bluesky: <Icons.BlueskyIcon {...iconProps} />,
        medium: <Icons.MediumIcon {...iconProps} />,
        pinterest: <Icons.PinterestIcon {...iconProps} />
    };
    return socialIcons[iconName];
};

const Social = () => {
    return (
        <SocialContainer>
            {content.social.map((socialItem) => (
                <SocialLink
                    key={socialItem.name}
                    href={socialItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={socialItem.name}
                >
                    { getSocialIcon(socialItem.icon as SocialIconName) }
                </SocialLink>
            ))}
        </SocialContainer>
    );
};

export default Social;

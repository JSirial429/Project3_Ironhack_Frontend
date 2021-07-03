import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
    scroll.scrollToTop();
    };
    return (
    <FooterContainer>
        <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
            <FooterLinkItems>
            </FooterLinkItems>
            <FooterLinkItems>
            </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
            </FooterLinkItems>
            <FooterLinkItems>
            </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                Price Checker
            </SocialLogo>
            <WebsiteRights>Price Checker © 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                </SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    );
};

export default Footer;
import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
} from './FooterElement'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener norefereer'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='instagram' rel='noopener norefereer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='twitter' rel='noopener norefereer'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='youtube' rel='noopener norefereer'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

import React from 'react';
import {
    FooterContainer,
    InfoArea,
    SocialMediaArea,
    Title,
    LinkText,
    SocialMedia,
    Facebook,
    Instagram,
    Linkedin,
    Github
} from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <InfoArea>
                <Title>Imagens retiradas do site Pinterest</Title>
                <LinkText to='/'>https://br.pinterest.com/</LinkText>
            </InfoArea>
            <SocialMediaArea>
                <Title>Redes Sociais</Title>
                <SocialMedia>
                    <Facebook />
                    <Instagram />
                    <Linkedin />
                    <Github />
                </SocialMedia>
            </SocialMediaArea>

        </FooterContainer>
    )
}

export default Footer;
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

export const FooterContainer = styled.div`
    margin-top: 4rem;
    width: 100%;
    height: auto;
    min-height: 15vh;
    display: flex;
    justify-content: space-around;
    background-color: #FF819F;

    @media screen and (max-width: 780px){
        flex-direction: column;
        padding: 30px 0px;
    }
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 780px){
        align-items: center;
    }
`;

export const SocialMediaArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 780px){
      padding: 30px;
    }
`;


export const Title = styled.h3`
    font-size: 1.2rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;
`;

export const LinkText = styled(Link)`
    font-size: 1.2rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;
    outline: none;
    text-decoration: none;
    `;

export const SocialMedia = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 1.5rem;
`;

export const Facebook = styled(TiSocialFacebook)`
    width: 32px;
    height: 32px;
    color: #072030;
`;

export const Instagram = styled(TiSocialInstagram)`
    width: 32px;
    height: 32px;
    color:#072030;
`;

export const Linkedin = styled(TiSocialLinkedin)`
    width: 32px;
    height: 32px;
    color:#072030;
`;

export const Github = styled(TiSocialGithub)`
    width: 32px;
    height: 32px;
    color:#072030;
`;



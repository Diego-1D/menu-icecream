import styled from "styled-components";
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

export const FooterContainer = styled.div`
    margin-top: 4rem;
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-around;
    background-color: #FF819F;

    @media screen and (max-width: 780px){
        flex-direction: column;
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
`;


export const Title = styled.h3`
    font-size: 1.5rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;

    @media screen and (max-width: 780px){
        font-size: 1.3rem;
    }
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
    width: 35px;
    height: 35px;
    color: #072030;
`;

export const Instagram = styled(TiSocialInstagram)`
    width: 35px;
    height: 35px;
    color:#072030;
`;

export const Linkedin = styled(TiSocialLinkedin)`
    width: 35px;
    height: 35px;
    color:#072030;
`;

export const Github = styled(TiSocialGithub)`
    width: 35px;
    height: 35px;
    color:#072030;
`;



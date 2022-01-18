import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
    background: #FF819F;
    height: 100%;

    @media screen and (max-width: 768px){
       height: auto;
    }
`;

export const HeroContent = styled.div`
    width: 100%;
    padding: 0 4rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;

    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 590px){
        padding: 0 2rem;
    }
`;

export const HeroItems = styled.div`
    color: #F8F8F8;
`;

export const HeroH1 = styled.h1`
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 2px;
    font-family: 'Oleo Script Swash Caps', cursive;
    padding: 3rem 0;
 
    @media screen and (max-width: 700px){
        font-size: 3rem;
    }

    @media screen and (max-width: 475px){
        font-size: 2.3rem;
    }

`;

export const AreaImage = styled.article`
    display: block;

    @media screen and (max-width:1100px){
        display: none;
    }
`;

export const HeroImage = styled.img`
    width: 33rem;

    @media screen and (max-width: 1200px){
       width: 30rem;
    }
`;

export const HeroBtn = styled(Link)`
    font-size: 18px;
    padding: 1rem 2.8rem;
    margin: 3rem 0;
    border: none;
    border-radius: 40px;
    background: #FFF5E9;
    color: #FF819F;
    font-weight: bold;
    transition: 0.3s ease-out;
    justify-content: center;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        background: #71CDFF;
        color: #FFF5E9;
        transition: 0.3s ease-out;
    }
`;
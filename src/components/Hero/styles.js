import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
    background: #FF819F;
    height: 100%;
`;

export const HeroContent = styled.div`
    height: 60vh;
    display: flex;
`;

export const HeroItems = styled.div`
   margin: 0 5rem;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-start;
   width: 650px;
   color: #FFF;

   @media screen and (max-width: 600px){
        margin: 0 3rem;
    }

    @media screen and (max-width: 450px){
        justify-content: center;
        margin: 0 1.5rem;
    }
`;

export const HeroH1 = styled.h1`
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 3px;
    font-family: 'Oleo Script Swash Caps', cursive;
    
    @media screen and (max-width: 600px){
        font-size: 50px;
    }
    @media screen and (max-width: 450px){
        font-size: 45px;
    }
`;

export const HeroBtn = styled(Link)`
    font-size: 20px;
    padding: 1rem 3rem;
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



import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #FF819F;
    height: 100vh;
`;

export const HeroContent = styled.div`
    height: calc(80vh - 80px);
    max-height: 100%;
    display: flex;
    justify-content:space-evenly;
`;

export const HeroItems = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   height: 100vh;
   max-height: 100%;
   width: 650px;
   color: #FFF;
`;

export const HeroH1 = styled.h1`
    font-size: 60px;
    font-weight: 400;
    margin-bottom: 2.5rem;
    letter-spacing: 3px;
    font-family: 'Oleo Script Swash Caps', cursive;
`;

export const HeroBtn = styled.button`
    font-size: 20px;
    padding: 1rem 3rem;
    border: none;
    border-radius: 40px;
    background: #FFF5E9;
    color: #FF819F;
    font-weight: bold;
    transition: 0.3s ease-out;

    &:hover{
        cursor: pointer;
        background: #71CDFF;
        color: #FFF5E9;
        transition: 0.3s ease-out;
    }
`;

export const HeroImage = styled.img`
    width: 300px;
    height: 100%;
    border-radius: 200px;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import img from '../../images/fundo-derretido-pink2.png';
import { BsArrowLeft } from "react-icons/bs";


export const MenuContainer = styled.main`
    height: 100%;
    background: #F7F5DD;
 `;

export const BorderPink = styled.div`
    height: 330px;
    background: url(${img});

    @media screen and (max-width: 900px){
        transform: translate(0,-65px);
    }

    @media screen and (max-width: 650px){
        transform: translate(0,-80px);
    }

   
`;

export const MenuTitle = styled.div`
    text-align: center;
    padding: 6rem;

    @media screen and (max-width: 900px){
        padding: 9rem;
    }
   
`;

export const H2 = styled.h1`
   font-size: 60px;
    font-weight: 400;
    font-family: 'Oleo Script Swash Caps', cursive;
    color: #FFF;

    @media screen and (max-width: 650px){
       font-size:50px;
    }
`;

export const BackButton = styled(Link)`
    font-size: 15px;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 40px;
    background: #FFF5E9;
    color: #FF819F;
    transition: 0.3s ease-out;
    justify-content: center;
    transform: translate(25px, 25px);
    position: absolute;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    display: block;

    &:hover{
        background: #71CDFF;
        color: #FFF5E9;
        transition: 0.3s ease-out;
    }
    @media screen and (max-width: 900px){
        transform: translate(15px,80px);
     
    }

    @media screen and (max-width: 650px){
        transform: translate(15px,90px);
        display: none;
    }

`;

export const BackButtonIcon = styled(BsArrowLeft)`
     background: #FFF5E9;
    color: #FF819F;
    width: 40px;
    height: 40px;
    position: absolute;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s linear;
    display: none;

    &:hover{
        background-color: #FFF;
        color:#71CDFF;
    }


    @media screen and (max-width: 650px){
        transform: translate(15px, 95px);
        display: block;
    }

`;
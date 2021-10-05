import { Link } from "react-router-dom";
import styled from "styled-components";
import img from '../../images/fundo-derretido-pink2.png';
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const MenuContainer = styled.main`
    height: 100%;
    background: #F7F5DD;
 `;

export const BorderPink = styled.div`
    height: 330px;
    background: url(${img});

    @media screen and (max-width: 900px){
        transform: translate(0,-75px);
    }

    @media screen and (max-width: 650px){
        transform: translate(0,-100px);
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
    background-color: #71CDFF;
    color:#000000;
    padding: 0.75rem 0.75rem;
    transform: translate(25px, 25px);
    position: absolute;
    border: none;
    border-radius: 0.75rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s linear;
    text-decoration: none;
    display: block;

    &:hover{
        background-color: #FFF;
        color:#71CDFF;
    }

    @media screen and (max-width: 900px){
        transform: translate(15px,90px);
     
    }

    @media screen and (max-width: 650px){
        transform: translate(15px,90px);
        display: none;
    }

`;

export const BackButtonIcon = styled.img`
    background:url("https://img.icons8.com/ios-filled/50/000000/left.png");
    background-repeat: no-repeat;
    background-color: #71CDFF;
    color:pink;
    width: 50px;
    height: 50px;
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
        transform: translate(15px,110px);
        display: block;
    }

`;
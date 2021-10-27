import { Link } from "react-router-dom";
import styled from "styled-components";
import img from '../../images/fundo-derretido-pink2.png';
import { BsArrowLeft } from "react-icons/bs";


export const MenuContainer = styled.div`
    width: 100%;
    background: #F7F5DD;
 `;

export const BorderPink = styled.div`
    height: 310px;
    background-image: url(${img});
    background-position: center;
    padding: 1.5rem;
`;

export const MenuTitle = styled.div`
    text-align: center;
    padding: 2rem;

    @media screen and (max-width: 1000px){
        padding: 5rem;
    }
`;

export const H2 = styled.h2`
    font-size: 60px;
    font-weight: 400;
    font-family: 'Oleo Script Swash Caps', cursive;
    color: #FFF;
`;

export const BackButton = styled(Link)`
    width: 160px;
    text-align: center;
    font-size: 15px;
    padding: 0.75rem 0;
    border: none;
    border-radius: 40px;
    background: #FFF5E9;
    color: #FF819F;
    transition: 0.3s ease-out;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    display: block;
    
    &:hover{
        background: #71CDFF;
        color: #FFF5E9;
        transition: 0.3s ease-out;
    }
    @media screen and (max-width: 1000px){
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
    transition: 0.3s ease-out;
    display: none;
    
    &:hover{
        background: #71CDFF;
        color: #FFF5E9;
        transition: 0.3s ease-out;
    }
    @media screen and (max-width: 1000px){
        display: block;
    }
`;

export const CategoriesArea = styled.div`
    width: 100%;
    margin: 3rem 0;
`;
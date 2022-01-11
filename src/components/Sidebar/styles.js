import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #71CDFF;
    display: grid;
    align-items: center;
    margin-top:-180px;
    transition: 0.3s ease-in-out;
    right: -100%;
    z-index: 999;

    @media screen and (max-width: 800px){
        right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    }
`;


export const Icon = styled.div`
    position: absolute;
    top: 1.8rem;
    right: 3rem;
    background:transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    
`;

export const CloseIcon = styled(FaTimes)`
    color: #000000;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    text-align: center;
`;

export const SidebarLink = styled(Link)`
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 1.5rem;
    font-weight: 700;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    background-color: transparent;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        background-color: pink;
        transition: 0.3s ease-in-out;
    }
`;
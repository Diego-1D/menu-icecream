import styled from "styled-components";
import CreamBackground from '../../images/fundo-derretido-cream.png';
import { FaIceCream } from 'react-icons/fa'
import {FiAlignJustify} from "react-icons/fi";
import {Link} from 'react-router-dom';

export const NavContainer = styled.div`
    background: url(${CreamBackground});
    height: 180px;
    display: flex;
    justify-content: center;
`;

export const NavWrap = styled.div`
    width: 90%;
    height: 50%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;

`;

export const LogoArea = styled.div`
  display: flex;
  margin-right: 4rem;
`;

export const Logo = styled(FaIceCream)`
    width: 50px;
    height: 50px;
    color: #58CCF3;
`;

export const LogoP = styled.p`
    font-family: 'Oleo Script', cursive;
    color: #58CCF3;
    font-size: 30px;
   
`;

export const Nav = styled.nav`
    flex: 1;
    position: relative;
    display: block;

    @media screen and (max-width: 800px){
        display: none;
    }
`;

export const NavLink = styled(Link)`
    padding: 0 15px;
    font-size: 16px;
    color: #58CCF3;
    text-decoration: none;
    font-weight: 700;
`;

export const NavIcon = styled(FiAlignJustify)`
    display: none;
    position: absolute;
    right: 0;
    cursor: pointer;
    color: #58CCF3;
    font-size:2rem ;

    @media screen and (max-width: 800px){
        display: block;
    }
`;

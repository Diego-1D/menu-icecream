import styled from "styled-components";
import CreamBackground from '../../images/fundo-derretido-cream.png';
import { FaIceCream } from 'react-icons/fa'
import {Link} from 'react-router-dom';

export const NavContainer = styled.div`
    background: url(${CreamBackground});
    height: 180px;
    display: flex;
    justify-content: center;
`;

export const NavWrap = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;

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
    padding-left: 50px;
`;

export const NavLink = styled(Link)`
    padding: 0 15px;
    font-size: 16px;
    color: #58CCF3;
    text-decoration: none;
    font-weight: 700;
`;

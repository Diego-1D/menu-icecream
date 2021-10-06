import React from 'react';
import {
    NavContainer,
    Nav,
    NavWrap,
    LogoArea,
    Logo,
    LogoP,
    NavLink,
    NavIcon
} from './styles';

const Navbar = ({ toggle }) => {
    return (
        <NavContainer>
            <NavWrap>
                <LogoArea>
                    <Logo />
                    <LogoP>Ice Cream</LogoP>
                </LogoArea>
                <NavIcon onClick={toggle} />
                <Nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/menu'>Menu</NavLink>
                    <NavLink to='/'>Contato</NavLink>
                    <NavLink to='/'>Sobre nós</NavLink>
                </Nav>
            </NavWrap>
        </NavContainer>
    )
}

export default Navbar;
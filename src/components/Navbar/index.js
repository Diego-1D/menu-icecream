import React from 'react';
import {
    NavContainer,
    Nav,
    NavWrap,
    Logo,
    LogoP,
    NavLink
} from './styles';

const Navbar = () => {
    return (
        <NavContainer>
            <NavWrap>
                <Logo />
                <LogoP>Ice Cream</LogoP>
                <Nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Menu</NavLink>
                    <NavLink to='/'>Contato</NavLink>
                    <NavLink to='/'>Sobre nós</NavLink>
                </Nav>
            </NavWrap>
        </NavContainer>
    )
}

export default Navbar;
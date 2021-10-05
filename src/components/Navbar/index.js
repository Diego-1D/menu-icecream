import React from 'react';
import {
    NavContainer,
    Nav,
    NavWrap,
    Logo,
    LogoP,
    NavLink,
    NavIcon
} from './styles';

const Navbar = ({toggle}) => {
    return (
        <NavContainer>
            <NavWrap>
                <Logo />
                <LogoP>Ice Cream</LogoP>
                <NavIcon onClick={toggle}/>
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
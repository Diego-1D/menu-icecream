import React from 'react';
import {
    SidebarContainer,
    SidebarMenu,
    SidebarLink,
    CloseIcon,
    Icon
} from './styles';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu >
                <SidebarLink to='/'>Home</SidebarLink>
                <SidebarLink to='/'>Menu</SidebarLink>
                <SidebarLink to='/'>Contato</SidebarLink>
                <SidebarLink to='/'>Sobre Nós</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar;
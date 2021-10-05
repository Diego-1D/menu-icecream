import React, { useState } from 'react';
import Categories from '../../components/Categories';
import SectionMenu from '../../components/Categories/SectionMenu';
import items from '../Home/content';

import {
    MenuContainer,
    BackButton,
    MenuTitle,
    H2,
    BorderPink,
    BackButtonIcon,
} from './styles';
import { Link } from 'react-router-dom';

const allCategories = ['Todos', ...new Set(items.map((item) => item.category))];

const Menu = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'Todos') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((items) => items.category === category);
        setMenuItems(newItems)
    }

    return (
        <MenuContainer>
            <BorderPink>
                <Link to='/'>
                    <BackButtonIcon/>
                </Link>
                <BackButton to='/'>
                    Voltar para Home
                </BackButton>
                <MenuTitle>
                    <H2>Menu</H2>
                </MenuTitle>
            </BorderPink>
            <Categories categories={categories} filterItems={filterItems} />
            <SectionMenu items={menuItems} />
        </MenuContainer>
    )

}

export default Menu;
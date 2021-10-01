import React, { useState } from 'react';
import Categories from '../../components/Categories';
import SectionMenu from '../../components/Categories/SectionMenu';
import items from '../Home/content';

import {
    MenuContainer,
    MenuTitle,
    H2,
    BorderPink,
} from './styles';

const allCategories = ['Todos', ...new Set(items.map((item) => item.category))];

const Menu = () => {
    const [menuItems, setMenuItems] = useState (items);
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
                <MenuTitle>
                <H2>Menu</H2>
                </MenuTitle>
           </BorderPink>
            <Categories categories={categories} filterItems={filterItems}/>
            <SectionMenu items={menuItems}/>
        </MenuContainer>
    )

}

export default Menu;
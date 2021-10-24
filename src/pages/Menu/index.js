import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories';
import SectionMenu from '../../components/Categories/SectionMenu';
import items from '../Home/content';
import { useLocation } from "react-router";
import {
    MenuContainer,
    BackButton,
    MenuTitle,
    H2,
    BorderPink,
    BackButtonIcon,
    CategoriesArea,
} from './styles';
import { Link } from 'react-router-dom';

const allCategories = ['Todos', ...new Set(items.map((item) => item.category))];

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Menu = () => {

    let query = useQuery();
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories)
    const [selected, setSelected] = useState('Todos');

    const filterItems = (category) => {
        setSelected(category);
        if (category === 'Todos') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((items) => items.category === category);
        setMenuItems(newItems)
    }

    useEffect(() => {
        let category = query.get('category');
        if (category != null) {

            filterItems(category);
        }
    }, []);


    return (
        <MenuContainer>
            <BorderPink>
                <Link to='/'>
                    <BackButtonIcon />
                </Link>
                <BackButton to='/'> Voltar para Home </BackButton>
                <MenuTitle><H2>Menu</H2></MenuTitle>
            </BorderPink>
            <CategoriesArea>
                <Categories categories={categories} filterItems={filterItems} selected={selected} />
            </CategoriesArea>
            <SectionMenu items={menuItems} />
        </MenuContainer>
    )

}

export default Menu;
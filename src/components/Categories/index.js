import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
    display: flex;
    overflow-x: auto;

    @media screen and (min-width: 800px){
        justify-content: center;
    }
`;

const FilterButton = styled.button`
    background-color: ${props => props.active ? "#71cdff" : "transparent"};
    border-color: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 1rem;
    position: relative;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.75rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;
    border: 2px solid #71CDFF;  
    outline: none;
`;

const Categories = ({ categories, filterItems, selected }) => {


    return (
        <BtnContainer>
            {
                categories.map((category, index) => {
                    return (
                        <FilterButton
                            active={selected == category}
                            key={index}
                            onClick={() => filterItems(category)}
                        >
                            {category}
                        </FilterButton>
                    )
                })
            }
        </BtnContainer>
    );
}


export default Categories;
import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
    margin: 5rem;
    display: flex;
    justify-content: center;
`;

const FilterButton = styled.button`
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 1rem;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.75rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;

    &:active{
        transition: all 0.3s linear;
        background: #71CDFF;
        color: #FFF; 
        }
    
`;


const Categories = ({categories, filterItems}) => {
    return(
        <BtnContainer>
            {
                categories.map((category, index)=>{
                    return(
                        <FilterButton
                        type='button'
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
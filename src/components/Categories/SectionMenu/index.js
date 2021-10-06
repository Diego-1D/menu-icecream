import React from "react";
import {
    SectionContainer,
    MenuItem,
    Photo,
    ItemInfo,
    Price,
    Description,
    H1,
} from './styles';

const SectionMenu = ({ items }) => {
    return (
        <SectionContainer>
            {
                items.map((menuItem) => {
                    const { products } = menuItem;
                    return (
                        products.map((productsItem) => {
                            const { id , name, img, alt, price, description } = productsItem;
                            return (
                                <MenuItem key={id}>
                                    <Photo src={img} alt={alt} />
                                    <ItemInfo>
                                        <H1>{name}</H1>
                                        <Price>{price}</Price>
                                        <Description>{description}</Description>
                                    </ItemInfo>
                                </MenuItem>
                            )
                        })
                    )
                })}
        </SectionContainer>
    );
}

export default SectionMenu;
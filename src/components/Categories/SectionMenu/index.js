import React from "react";
import {
    SectionContainer,
    MenuItem,
    Photo,
    ItemInfo,
    Header,
    Price,
    H1,
    H3
} from './styles';

const SectionMenu = ({ items }) => {
    return (
        <SectionContainer>
            {
                items.map((menuItem) => {
                    const { products } = menuItem;
                    return (
                        products.map((productsItem) => {
                            const { id, name, img, alt, price, ing1,ing2, ing3,ing4, ing5, ing6 } = productsItem;
                            return (
                                <MenuItem key={id}>
                                    <Photo src={img} alt={alt} />
                                    <ItemInfo>
                                        <H1>{name}</H1>
                                        <Price>{price}</Price>
                                        <H3>Ingredientes:</H3>
                                        <H3>* {ing1}</H3>
                                        <H3>* {ing2}</H3>
                                        <H3>* {ing3}</H3>
                                        <H3>* {ing4}</H3>
                                        <H3>* {ing5}</H3>
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
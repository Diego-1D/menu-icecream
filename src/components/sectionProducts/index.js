import React from "react";
import {
    ProductsContent,
    ProductsHeading,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductsWrapFour,
    ProductsWrapThree,
    ProductCardThree,
    ProductInfoThree,
    ProductImgThree,
    ProductTitleThree,
    ProductInfoAreaThree,
    ProductPrice

} from './styles';

const Products = ({ qtItems, heading, data }) => {

    return (
        <ProductsContent>
            <ProductsHeading>{heading}</ProductsHeading>
            {
                qtItems === 4 ?
                    <ProductsWrapFour>
                        {
                            data.map((product, index) => {
                                return (
                                    <ProductCard key={index}>
                                        <ProductInfo>
                                            <ProductImg src={product.img} alt={product.alt} />
                                            <ProductTitle>{product.name}</ProductTitle>
                                            <ProductPrice>{product.price}</ProductPrice>
                                        </ProductInfo>
                                    </ProductCard>
                                )
                            })
                        }
                    </ProductsWrapFour>
                    :
                    <ProductsWrapThree>
                        {
                            data.slice(0,3).map((product, index) => {
                                return (
                                    <ProductCardThree key={index}>
                                        <ProductInfoThree>
                                            <ProductImgThree src={product.img} alt={product.alt} />
                                            <ProductInfoAreaThree>
                                                <ProductTitleThree>{product.name}</ProductTitleThree>
                                                <ProductTitleThree>{product.price}</ProductTitleThree>
                                            </ProductInfoAreaThree>
                                        </ProductInfoThree>
                                    </ProductCardThree>
                                )
                            })
                        }
                    </ProductsWrapThree>
            }
        </ProductsContent>
    )
}

export default Products;
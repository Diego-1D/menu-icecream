import styled from "styled-components";

export const ProductsContent = styled.div`
    padding: 0 5rem calc((100vw - 1300px) /2);
`;

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    font-family: 'Oleo Script', cursive;
    color: #072030;
    margin-bottom: 2.5rem;
`;

export const ProductsWrapFour = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
`;

export const ProductCard = styled.div`
    line-height: 2;
    margin: 0 2rem;
    border: 0.15rem solid pink;
    border-radius: 40px;
`;

export const ProductImg = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 40px 40px 0 0 ;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    margin-bottom:-15px ;
`;

export const ProductTitle = styled.h3`
    font-family: 'Oleo Script', cursive;
    color: #072030; 
    margin: 0.5rem;
`;

export const ProductPrice = styled.div`
    padding: 0 0.5rem;
    color: #FFFFFF;
    background-color: #072030;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    font-size: 12px;
    transform: translate(65px, -100px);
`;

export const ProductBtnArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;



export const ProductsWrapThree = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    margin-top: 5rem;
`;

export const ProductCardThree = styled.div`
    margin: 0 3rem;
    width: 280px;
    border-radius: 40px;
    background-color: #FFF;
`;

export const ProductInfoThree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    transform: translate(0, -30px);   
`;

export const ProductInfoAreaThree = styled.div`
    display: flex;
    justify-content: space-between;
    width: 88%; 
    margin-top: 15px;
`;

export const ProductImgThree = styled.img`
    height: 250px;
    width: 90%;
    object-fit: cover;
    border-radius: 40px 40px 0 0;
`;


export const ProductTitleThree = styled.h3`
    font-family: 'Oleo Script', cursive;
    color: #072030; 
`;


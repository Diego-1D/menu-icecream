import styled from "styled-components";

export const ProductsContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProductsHeading = styled.h1`
    font-size: 2.5rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;
`;

export const ProductsWrapFour = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width:87%;
    margin: 2.5rem 0;

    @media screen and (max-width: 1000px){
        width: 80%;
        grid-template-columns: repeat(2, 1fr);  
        gap: 1.5rem 0;
    }
    @media screen and (max-width: 720px){
        grid-template-columns: 1fr;
    }
`;

export const ProductCard = styled.div`
    line-height: 2;
    margin: 1rem auto;
    width: 210px;
    border: 0.15rem solid pink;
    border-radius: 40px;

    @media screen and (max-width: 1100px){
       width: 195px;
    }
`;

export const ProductImg = styled.img`
    height: 280px;
    width: 100%;
    object-fit: cover;
    border-radius: 40px 40px 0 0;

    @media screen and (max-width: 1100px){
      height: 240px;
    }
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

    @media screen and (max-width: 1100px){
        transform: translate(45px, -100px);
    }
`;

//****************************************************************************************************************************************

export const ProductsWrapThree = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 4rem auto;
    width: 87%;

    @media screen and (max-width: 950px){
        grid-template-columns: 1fr;
        gap: 5rem 0;
    }
`;

export const ProductCardThree = styled.div`
    margin: 0 auto;
    width: 280px;
    border-radius: 40px;
    background-color: #FFF;

    @media screen and (max-width: 1100px){
       width: 240px;
    }

    @media screen and (max-width: 950px){
        width: 260px;
    }
`;

export const ProductImgThree = styled.img`
    height: 250px;
    width: 90%;
    object-fit: cover;
    border-radius: 40px 40px 0 0;
    transform: translate(0, -30px);
    
    @media screen and (max-width: 1100px){
       height: 195px;
    }

    @media screen and (max-width: 950px){
        height: 210px;
    }
`;

export const ProductInfoThree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

export const ProductInfoAreaThree = styled.div`
    display: flex;
    justify-content: space-between;
    width: 88%; 
    transform: translate(0, -15px);

    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`;



export const ProductTitleThree = styled.h3`
    font-family: 'Oleo Script', cursive;
    color: #072030; 
`;
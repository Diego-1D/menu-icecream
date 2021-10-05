import styled from "styled-components";

export const ProductsContent = styled.div`
     margin: 0 auto;
`;

export const ProductsHeading = styled.h1`
    font-size: 2rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;
    margin: 2rem 2.5rem;

    @media screen and (max-width: 600px){
       text-align: center;
       font-size: 2.5rem;
    }
`;

export const ProductsWrapFour = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 2rem auto;
    justify-content: center;
    width: 88vw;
    gap: 0 1rem ;

    @media screen and (max-width: 1100px){
     width: 95vw;
    }

    @media screen and (max-width: 800px){
        grid-template-columns: repeat(2, 1fr);
        width: 70vw;
        gap: 2rem 4rem ;
    }

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }
`;

export const ProductCard = styled.div`
    line-height: 2;
    margin: 0 auto;
    width: 220px;
    border: 0.15rem solid pink;
    border-radius: 40px;

    @media screen and (max-width:1100px){
        width: 180px;
    }

    @media screen and (max-width: 800px){
        width: 220px;
    }
`;

export const ProductImg = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 40px 40px 0 0 ;

    @media screen and (max-width:1100px){
        height: 240px;
    }
    @media screen and (max-width:800px){
        height: 280px;
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
`;



export const ProductsWrapThree = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 4rem auto;
    justify-content: center;
    width: 88vw;
    gap: 0 1rem ;

    @media screen and (max-width: 1100px){
     width: 95vw;
    }

    @media screen and (max-width: 900px){
        width: 70vw;
        gap: 0 2rem ;
    }    
    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
        gap: 6rem;
    }
`;

export const ProductCardThree = styled.div`
    margin: 0 auto;
    width: 280px;
    border-radius: 40px;
    background-color: #FFF;
    
    @media screen and (max-width:1100px){
     width: 250px;
    }

    @media screen and (max-width:900px){
     width: 220px;
    }
    @media screen and (max-width: 800px){
     width: 280px;
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

    @media screen and (max-width:900px){
        flex-direction: column;
    }

`;

export const ProductImgThree = styled.img`
    height: 250px;
    width: 90%;
    object-fit: cover;
    border-radius: 40px 40px 0 0;
    transform: translate(0, -30px);

    @media screen and (max-width:1100px){
        height: 230px;
    }

    @media screen and (max-width:900px){
     height: 200px;
    }

    @media screen and (max-width: 800px){
      height: 250px;
    }
`;


export const ProductTitleThree = styled.h3`
    font-family: 'Oleo Script', cursive;
    color: #072030; 
`;


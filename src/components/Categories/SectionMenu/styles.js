import styled from "styled-components";

export const SectionContainer = styled.section`
    width: 95vw;
    margin: 0 auto;
    max-width: 1100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem 8rem;
    justify-content: center;

    @media screen and (max-width:1110px){
        width: 85vw;
        gap: 5rem 5rem;
    }

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr; 
        width: 65vw;
    }
 
    @media screen and (max-width: 650px){
        width: 85vw;
    }
`;

export const MenuItem = styled.div`
    display: grid;
    grid-template-columns: 210px 1fr;
    height: 225px;
    background: #FFF;
    border-radius: 0 1rem 1rem 0;
    
    @media screen and (max-width:1110px){
        grid-template-columns: 165px 1fr;
        height: 180px;
    }

    @media screen and (max-width:900px){
        grid-template-columns: 190px 1fr;
        height: 205px;
    }

    @media screen and (max-width:800px){
        grid-template-columns: 180px 1fr;
        height: 195px;
    }

    @media screen and (max-width:500px){
        grid-template-columns: 160px 1fr;
        height: 185px;
    }
  
`;

export const Photo = styled.img`
    object-fit: cover;
    height: 250px;
    width: 200px;
    transform: translate(5px, -30px);
    border-radius: 0 1rem 1rem 0; 
    
    @media screen and (max-width:1110px){
    height: 205px;
    width: 155px; 
    }

    @media screen and (max-width:900px){
    height: 230px;
    width: 180px; 
    }

    @media screen and (max-width:800px){
    height: 220px;
    width: 170px; 
    }

    @media screen and (max-width:500px){
    height: 210px;
    width: 150px; 
    }

  
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem ;
    font-family: 'Oleo Script', cursive;
    color: #072030;
`;


export const H1 = styled.h1`
    font-size:1.2rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;
`;

export const Price = styled.h4`
    font-family: 'Oleo Script', cursive;
    color: #072030;
    font-size: 1.1rem;
`;

export const Description = styled.h4`
    font-family: 'Oleo Script', cursive;
    color: #072030;
    font-size: 1.0rem;
    text-align: justify;
    margin: 1rem 0;
`;
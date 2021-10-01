import styled from "styled-components";

export const SectionContainer = styled.section`
    width: 95vw;
    margin: 0 auto;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem 10rem;
    justify-content: center;
`;

export const MenuItem = styled.div`
    display: grid;
    grid-template-columns: 210px 1fr;
    height: 225px;
    background: #FFF;
    border-radius: 0 1rem 1rem 0;

`;

export const Photo = styled.img`
    object-fit: cover;
    height: 250px;
    width: 200px;
    transform: translate(5px, -30px);
    border-radius: 0 1rem 1rem 0;
    
`;
export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem ;
    line-height: 1.5rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;
`;


export const H1 = styled.h1`
    font-size:1.2rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;
`;

export const H3 = styled.h3`
    font-size:0.9rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;
    margin-left: 15px;
`;

export const Price = styled.h4`
     font-family: 'Oleo Script', cursive;
    color: #072030;
`;
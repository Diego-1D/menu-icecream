import styled from "styled-components";

export const SectionContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 4rem 0;
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    gap: 3rem 5rem;

    @media screen and (max-width: 1000px) {
       width: 95%;
       gap: 3rem 2.5rem;
    }
    @media screen and (max-width: 750px) {
        width: 70%;
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 550px) {
        width: 87%;
    }
`;

export const MenuItem = styled.div`
    display: grid;
    grid-template-columns: 180px 1fr;
    background-color: #FFF;
    border-radius: 1rem; 

    @media screen and (max-width: 1000px) {
        grid-template-columns: 150px 1fr;
    }
`;

export const Photo = styled.img`
    width: 100%;
    height: 240px;
    border-radius: 1rem 0 0 1rem;

    @media screen and (max-width: 1000px) {
        height: 210px;
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;

    @media screen and (max-width: 1000px) {
        padding: 0.7rem;
    }
`;


export const H1 = styled.h3`
    font-size: 1.4rem;
    font-family: 'Oleo Script', cursive;
    color: #072030;

    @media screen and (max-width: 1000px) {
       font-size: 1.3rem;
    }
    @media screen and (max-width: 380px) {
       font-size: 1rem;
    }
`;

export const Price = styled.h4`
    font-family: 'Oleo Script', cursive;
    color: #072030;
    font-size: 0.9rem;

    @media screen and (max-width: 380px) {
       font-size: 0.7rem;
    }
`;

export const Description = styled.h4`
    font-family: 'Oleo Script', cursive;
    color: #17364A;
    font-size: 1rem;
    text-align: justify;
    margin: 0.8rem 0;
    
    @media screen and (max-width: 380px) {
       font-size: 0.8rem;
    }
`;
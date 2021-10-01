import styled from "styled-components";
import img from '../../images/fundo-derretido-pink2.png';

 export const MenuContainer = styled.main`
    height: 100%;
    background: #F7F5DD;
 `;

export const BorderPink = styled.div`
    height: 330px;
    background: url(${img});
`;

export const MenuTitle =styled.div`
    text-align: center;
    padding-top: 6rem;
`;

export const H2 = styled.h1`
   font-size: 60px;
    font-weight: 400;
    font-family: 'Oleo Script Swash Caps', cursive;
    color: #FFF;
`;
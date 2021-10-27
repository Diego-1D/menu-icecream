import styled from 'styled-components';

import milk1 from '../../images/MilkShek/Imagem01.jpg';
import milk2 from '../../images/MilkShek/Imagem02.jpg';
import milk3 from '../../images/MilkShek/Imagem03.jpg';
import milk4 from '../../images/MilkShek/Imagem05.jpg';

import bananasplit01 from '../../images/BananaSplit/Imagem01.jpg';
import bananasplit02 from '../../images/BananaSplit/Imagem02.jpg';
import bananasplit03 from '../../images/BananaSplit/Imagem03.jpg';
import bananasplit04 from '../../images/BananaSplit/Imagem04.jpg';

import sorvete1 from '../../images/Casquinha/Imagem01.jpg';
import sorvete2 from '../../images/Casquinha/Imagem02.jpg';
import sorvete3 from '../../images/Casquinha/Imagem03.jpg';
import sorvete4 from '../../images/Casquinha/Imagem04.jpg';

import picole1 from '../../images/Picole/Imagem04.jpg'
import picole2 from '../../images/Picole/Imagem02.jpg'
import picole3 from '../../images/Picole/Imagem03.jpg'

import sundae1 from '../../images/Sundae/Imagem01.jpg';
import sundae2 from '../../images/Sundae/Imagem02.jpg';
import sundae3 from '../../images/Sundae/Imagem03.jpg';
import sundae4 from '../../images/Sundae/Imagem04.jpg';
import { Link } from 'react-router-dom';

const ContainerPink = styled.div`
    background: ${props => props.theme.backgroundColors.backgroundPink};
`;
const ContainerBlue = styled.div`
    background: ${props => props.theme.backgroundColors.backgroundBlue};
`;
const ContainerWhite = styled.div`
    background: ${props => props.theme.backgroundColors.backgroundWhite};
`;

const BorderBlue = styled.div`
    height: 180px;
    background: ${props => props.theme.border.backgroundBorderBlue};
`;
const BorderPink = styled.div`
    height: 180px;
    background: ${props => props.theme.border.backgroundBorderPink};
`;
const BorderWhite = styled.div`
    height: 180px;
    background: ${props => props.theme.border.backgroundBorderWhite};
`;
const ProductBtnArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

/*
Button00:{
    background-color: Pink,
    color: White
}
 */
const Button00 = styled(Link)`
    font-size: ${props => props.theme.fontSize.small};
    padding: ${props => props.theme.paddingSize.padding};
    border: none;
    border-radius: ${props => props.theme.borderRadius.radius};
    background-color: ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    transition: 0.3s ease-out;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        background:  ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};
        transition: 0.3s ease-out;
    }
`;

/*
Button01:{
    background-color: White,
    color: Blue
}
 */
const Button01 = styled(Link)`
    font-size: ${props => props.theme.fontSize.small};
    padding: ${props => props.theme.paddingSize.padding};
    border: none;
    border-radius: ${props => props.theme.borderRadius.radius};
    background-color: ${props => props.theme.colors.white};
    color:  ${props => props.theme.colors.blue};
    font-weight: bold;
    transition: 0.3s ease-out;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        background: ${props => props.theme.colors.pink};
        color: ${props => props.theme.colors.white};
        transition: 0.3s ease-out;
    }
`;

/*
Button02:{
    background-color: White,
    color: Pink
}
 */
const Button02 = styled(Link)`
    font-size: ${props => props.theme.fontSize.small};
    padding: ${props => props.theme.paddingSize.padding};
    border: none;
    border-radius: ${props => props.theme.borderRadius.radius};
    background-color:  ${props => props.theme.colors.white};
    color:  ${props => props.theme.colors.pink};
    font-weight: bold;
    transition: 0.3s ease-out;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        background:  ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};
        transition: 0.3s ease-out;
    }
`;

export const sections = [
    {
        key:1,
        theme: ContainerWhite,
        border: BorderPink,
        btn: Button00,
        btnArea: ProductBtnArea,
        category: 'Milk Shake',
        products: [{
            id: 1,
            img: milk1,
            alt: 'Milk Shek',
            name: 'Milk Shek 01',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 2,
            img: milk2,
            alt: 'Milk Shek',
            name: 'Milk Shek 02',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 3,
            img: milk3,
            alt: 'Milk Shek',
            name: 'Milk Shek 03',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 4,
            img: milk4,
            alt: 'Milk Shek',
            name: 'Milk Shek 04',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 4,

    },
    {
        key:2,
        theme: ContainerBlue,
        border: BorderWhite,
        btn: Button01,
        btnArea: ProductBtnArea,
        category: 'Banana Split',
        products: [{
            id: 1,
            img: bananasplit01,
            alt: 'Banana Split 01',
            name: 'Banana Split 01',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 2,
            img: bananasplit02,
            alt: 'Banana Split 02',
            name: 'Banana Split 02',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 3,
            img: bananasplit03,
            alt: 'Banana Split 03',
            name: 'Banana Split 03',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 4,
            img: bananasplit04,
            alt: 'Banana Split 04',
            name: 'Banana Split 04',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 3
    },
    {
        key:3,
        theme: ContainerWhite,
        border: BorderBlue,
        btn: Button00,
        btnArea: ProductBtnArea,
        category: 'Casquinha',
        products: [{
            id: 1,
            img: sorvete1,
            alt: 'Casquinha 01',
            name: 'Casquinha 01',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 2,
            img: sorvete2,
            alt: 'Casquinha 02',
            name: 'Casquinha 02',
            price: 'R$9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 3,
            img: sorvete3,
            alt: 'Casquinha 03',
            name: 'Casquinha 03',
            price: 'R$9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        }
            ,
        {
            id: 4,
            img: sorvete4,
            alt: 'Casquinha 04',
            name: 'Casquinha 04',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 4
    },
    {
        key:4,
        theme: ContainerPink,
        border: BorderWhite,
        btn: Button02,
        btnArea: ProductBtnArea,
        category: 'Picolé',
        products: [{
            id: 1,
            img: picole1,
            alt: 'Picolé 01',
            name: 'Picolé 01',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 2,
            img: picole2,
            alt: 'Picolé 02',
            name: 'Picolé 02',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 3,
            img: picole3,
            alt: 'Picolé 03',
            name: 'Picolé 03',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'


        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 3
    },
    {
        key:5,
        theme: ContainerWhite,
        border: BorderPink,
        btn: Button00,
        btnArea: ProductBtnArea,
        category: 'Sundae',
        products: [{
            id: 1,
            img: sundae1,
            alt: 'Sundae 01',
            name: 'Sundae 01',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 2,
            img: sundae2,
            alt: 'Sundae 02',
            name: 'Sundae 02',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 3,
            img: sundae3,
            alt: 'Sundae 03',
            name: 'Sundae 03',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        },
        {
            id: 4,
            img: sundae4,
            alt: 'Sundae 04',
            name: 'Sundae 04',
            price: 'R$ 9.99',
            description: ' Um sorvete é sempre bem-vindo para colorir e refrescar a vida. Um dia sem sorvete é um dia perdido!'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 4
    }

];


export default sections;
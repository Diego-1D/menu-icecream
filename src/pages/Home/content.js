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
    height: 100%;
    background: ${props => props.theme.colors.backgroundPink};
`;
const ContainerBlue = styled.div`
    height: 100%;
    background: ${props => props.theme.colors.backgroundBlue};
`;
const ContainerWhite = styled.div`
   height: 100%;
    background: ${props => props.theme.colors.backgroundWhite};
`;

const BorderBlue = styled.div`
    height: 180px;
    background: ${props => props.theme.border.backgroundBorderBlue};
`;
const BorderPink = styled.div`
    background-repeat:no-repeat;
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

const ProductBtn = styled(Link)`
    font-size: 20px;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 40px;
    background-color:#FF819F;
    color: #FFFFFF;
    font-weight: bold;
    transition: 0.3s ease-out;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        background: #71CDFF;
        color: #FFF;
        transition: 0.3s ease-out;
    }
`;

const ProductBtn1 = styled(Link)`
    font-size: 20px;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 40px;
    background-color:#FFFFFF ;
    color: #71CDFF;
    font-weight: bold;
    transition: 0.3s ease-out;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        background: #FF819F;
        color: #FFF;
        transition: 0.3s ease-out;
    }
`;

const ProductBtn2 = styled(Link)`
    font-size: 20px;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 40px;
    background-color:#FFFFFF ;
    color: #FF819F;
    font-weight: bold;
    transition: 0.3s ease-out;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        background: #71CDFF;
        color: #FFF;
        transition: 0.3s ease-out;
    }
`;

export const sections = [
    {
        key:1,
        theme: ContainerWhite,
        border: BorderPink,
        btn: ProductBtn,
        btnArea: ProductBtnArea,
        category: 'Milk Shake',
        products: [{
            id: 1,
            img: milk1,
            alt: 'Milk Shek',
            name: 'Name 01',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 2,
            img: milk2,
            alt: 'Milk Shek',
            name: 'Name 02',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 3,
            img: milk3,
            alt: 'Milk Shek',
            name: 'Name 03',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 4,
            img: milk4,
            alt: 'Milk Shek',
            name: 'Name 04',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 4,

    },
    {
        key:2,
        theme: ContainerBlue,
        border: BorderWhite,
        btn: ProductBtn1,
        btnArea: ProductBtnArea,
        category: 'Banana Split',
        products: [{
            id: 1,
            img: bananasplit01,
            alt: 'Açaí com tapioca',
            name: 'Açaí com tapioca',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 2,
            img: bananasplit02,
            alt: 'Creme',
            name: 'Creme',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 3,
            img: bananasplit03,
            alt: 'Chocolate com flocos',
            name: 'Chocolate com flocos',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 4,
            img: bananasplit04,
            alt: 'Chocolate com flocos',
            name: 'Chocolate com flocos',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 3
    },
    {
        key:3,
        theme: ContainerWhite,
        border: BorderBlue,
        btn: ProductBtn,
        btnArea: ProductBtnArea,
        category: 'Casquinha',
        products: [{
            id: 1,
            img: sorvete1,
            alt: 'Milk Shek',
            name: 'Name 01',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 2,
            img: sorvete2,
            alt: 'Morango com creme',
            name: 'Morango com creme',
            price: 'R$9.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 3,
            img: sorvete3,
            alt: 'Morango',
            name: 'Morango',
            price: 'R$9.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        }
            ,
        {
            id: 4,
            img: sorvete4,
            alt: 'Milk Shek',
            name: 'Name 04',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 4
    },
    {
        key:4,
        theme: ContainerPink,
        border: BorderWhite,
        btn: ProductBtn2,
        btnArea: ProductBtnArea,
        category: 'Picolé',
        products: [{
            id: 1,
            img: picole1,
            alt: 'Limão com hortelã',
            name: 'Limão com hortelã',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 2,
            img: picole2,
            alt: 'Chocolate com castanha',
            name: 'Chocolate com castanha',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 3,
            img: picole3,
            alt: 'Melância',
            name: 'Melância',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'


        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 3
    },
    {
        key:5,
        theme: ContainerWhite,
        border: BorderPink,
        btn: ProductBtn,
        btnArea: ProductBtnArea,
        category: 'Sundae',
        products: [{
            id: 1,

            img: sundae1,
            alt: 'Brownie',
            name: 'Brownie',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 2,

            img: sundae2,
            alt: 'Milk Shek',
            name: 'Name 02',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 3,

            img: sundae3,
            alt: 'Cherry Bakewell',
            name: 'Cherry Bakewell',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        },
        {
            id: 4,

            img: sundae4,
            alt: 'Raspberry',
            name: 'Raspberry',
            price: 'R$19.99',
            description: 'Um delicioso sorvete cremoso de açaí com floco com um sabor para você viajar.'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 4
    }

];


export default sections;
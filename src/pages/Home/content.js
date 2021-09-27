import styled from 'styled-components';

import milk1 from '../../images/MilkShek/Imagem01.jpg';
import milk2 from '../../images/MilkShek/Imagem02.jpg';
import milk3 from '../../images/MilkShek/Imagem03.jpg';
import milk4 from '../../images/MilkShek/Imagem04.jpg';

import pote1 from '../../images/Pote/Imagem01.png';
import pote2 from '../../images/Pote/Imagem02.png';
import pote3 from '../../images/Pote/Imagem03.png';

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

const ContainerPink = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.backgroundPink};
`;
const ContainerBlue = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.backgroundBlue};
`;
const ContainerWhite = styled.div`
    height: 100vh;
    background: ${props => props.theme.colors.backgroundWhite};
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

export const sections = [
    {
        theme: ContainerWhite,
        border: BorderPink,
        title: 'Milk Shake',
        products: [{
            img: milk1,
            alt: 'Milk Shek',
            name: 'Name 01',
            price: 'R$19.99'
        },
        {
            img: milk2,
            alt: 'Milk Shek',
            name: 'Name 02',
            price: 'R$19.99'
        },
        {
            img: milk3,
            alt: 'Milk Shek',
            name: 'Name 03',
            price: 'R$19.99'
        },
        {
            img: milk4,
            alt: 'Milk Shek',
            name: 'Name 04',
            price: 'R$19.99'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 4
    },
    {
        theme: ContainerBlue,
        border: BorderWhite,
        title: 'Sorvete de Pote',
        products: [{
            img: pote1,
            alt: 'Açaí com tapioca',
            name: 'Açaí com tapioca',
            price: 'R$19.99'
        },
        {
            img: pote2,
            alt: 'Creme',
            name: 'Creme',
            price: 'R$19.99'
        },
        {
            img: pote3,
            alt: 'Chocolate com flocos',
            name: 'Chocolate com flocos',
            price: 'R$19.99'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 3
    },
    {
        theme: ContainerWhite,
        border: BorderBlue,
        title: 'Sorvete de Casquinha',
        products: [{
            img: sorvete1,
            alt: 'Milk Shek',
            name: 'Name 01',
            price: 'R$19.99'
        },
        {
            img: sorvete2,
            alt: 'Morango com creme',
            name: 'Morango com creme',
            price: 'R$9.99'
        },
        {
            img: sorvete3,
            alt: 'Morango',
            name: 'Morango',
            price: 'R$9.99'
        }
        ,
        {
            img: sorvete4,
            alt: 'Milk Shek',
            name: 'Name 04',
            price: 'R$19.99'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 4
    },
    {
        theme: ContainerPink,
        border: BorderWhite,
        title: 'Sorvete de Pote',
        products: [{
            img: picole1,
            alt: 'Limão com hortelã',
            name: 'Limão com hortelã',
            price: 'R$19.99'
        },
        {
            img: picole2,
            alt: 'Chocolate com castanha',
            name: 'Chocolate com castanha',
            price: 'R$19.99'
        },
        {
            img: picole3,
            alt: 'Melância',
            name: 'Melância',
            price: 'R$19.99'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 3
    },
    {
        theme: ContainerWhite,
        border: BorderPink,
        title: 'Sundae',
        products: [{
            img: sundae1,
            alt: 'Brownie',
            name: 'Brownie',
            price: 'R$19.99'
        },
        {
            img: sundae2,
            alt: 'Milk Shek',
            name: 'Name 02',
            price: 'R$19.99'
        },
        {
            img: sundae3,
            alt: 'Cherry Bakewell',
            name: 'Cherry Bakewell',
            price: 'R$19.99'
        },
        {
            img: sundae4,
            alt: 'Raspberry',
            name: 'Raspberry',
            price: 'R$19.99'
        }
        ],
        allProductsUrl: '/',
        qtItemsGrid: 4
    }

];


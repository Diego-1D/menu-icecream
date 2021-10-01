import React from "react";
import Navbar from "../Navbar";
import Img from '../../images/hero-image.png';
import Background from '../../images/fundo-blue.png';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroBtn,
    HeroBackground,
    HeroImage
} from './styles';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Não é só sorvete, é uma porta da imaginação.</HeroH1>
                    <HeroBtn>Explorar menu</HeroBtn>
                </HeroItems>
                <HeroBackground src={Background}/>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
import React from "react";
import Navbar from "../Navbar";
import Img from '../../images/hero-image.png';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroBtn,
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
                <HeroImage src={Img} alt='IceCream'/>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
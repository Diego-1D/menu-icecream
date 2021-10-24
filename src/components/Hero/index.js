import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroBtn,
    HeroImage,
    AreaImage
} from './styles';

import HeroImg from '../../images/HeroImage.png';
const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Não é só sorvete, é uma porta da imaginação.</HeroH1>
                    <HeroBtn to='/menu'>Explorar menu</HeroBtn>
                </HeroItems>
                <AreaImage>
                    <HeroImage src={HeroImg}/>
                </AreaImage>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
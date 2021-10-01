import React from "react";
import Hero from "../../components/Hero";
import SectionProducts from "../../components/sectionProducts";
import Theme from "./styles";
import { sections } from "./content";


const Home = () => {
    return (
        <>
            <Hero />
            <Theme>
                {
                    sections.map((section) => (
                        <section.theme>
                            <section.border />
                            <SectionProducts qtItems={section.qtItemsGrid} heading={section.category} data={section.products} />
                            <section.btnArea>
                                <section.btn>Ver mais sabores!</section.btn>
                            </section.btnArea>
                        </section.theme>
                    ))
                }
            </Theme>
        </>
    )
}

export default Home;
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
                            <SectionProducts qtItems={section.qtItemsGrid} heading={section.title} data={section.products} />
                        </section.theme>
                    ))
                }
            </Theme>
        </>
    )
}

export default Home;
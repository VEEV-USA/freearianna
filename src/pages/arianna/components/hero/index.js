import React from 'react';
import KidsHeroWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import P1 from "../../../../components/paragraph";

const KidsHero = () => {
    return (
        <KidsHeroWrap>
            <Container>
                <h4>Free Arianna Movement</h4>
                <SectionTitle>
                A Voice For Kids Without A Voice 
                </SectionTitle>
                <h1>
                Fighting Against Child Trafficking, Corruption, Fraud & Abuse
                </h1>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;
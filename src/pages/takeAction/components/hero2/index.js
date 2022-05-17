import React from 'react';
import KidsHeroWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import P1 from "../../../../components/paragraph";

const KidsHero = () => {
    return (
        <KidsHeroWrap>
            <Container>
                <SectionTitle>
                    Text
                </SectionTitle>
                <h4>Text</h4>
                <P1>
                    Text
                </P1>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;
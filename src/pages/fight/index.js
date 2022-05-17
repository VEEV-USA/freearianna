import React, {Fragment} from 'react';
import FightMain from "./components/main";
import KidsHero from "../arianna/components/hero";

const FightPage = () => {
    return (
        <Fragment>
            <KidsHero/>
            <FightMain/>
        </Fragment>
    );
};

export default FightPage;
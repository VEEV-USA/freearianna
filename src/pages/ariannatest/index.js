import React, {Fragment} from 'react';
import AriannaHero from "./components/hero";
import AriannaStory from "./components/story";
import AriannaCriminals from "../home/components/criminals";
import AriannaExtortion from "./components/extortion";
import AriannaMine from "./components/mine";
import AriannaShare from "./components/share";
import AriannaTable from "./components/table";
import AriannaLast from "./components/last";

const AriannaPage = () => {
    return (
        <Fragment>
            {/* <AriannaHero/> */}
            <AriannaStory/>
            <AriannaCriminals/>
            <AriannaExtortion/>
            <AriannaMine/>
            <AriannaShare/>
            <AriannaTable/>
            <AriannaLast/>
        </Fragment>
    );
};

export default AriannaPage;
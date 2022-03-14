import React, {Fragment} from 'react';
import KidsHero from "./components/hero";
import KidsVideos from "./components/videos";
import KidsBanner from "./components/banner";
import KidsChart from "./components/chart";

const KidsPage = () => {
    return (
        <Fragment>
            <KidsHero/>
            <KidsVideos/>
            <KidsBanner/>
            <KidsChart/>
        </Fragment>
    );
};

export default KidsPage;
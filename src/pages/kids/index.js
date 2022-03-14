import React, {Fragment} from 'react';
import KidsHero from "./components/hero";
import KidsVideos from "./components/videos";
import KidsBanner from "./components/banner";
import KidsChart from "./components/chart";
import KidsCynthia from "./components/cynthia";

const KidsPage = () => {
    return (
        <Fragment>
            <KidsHero/>
            <KidsVideos/>
            <KidsBanner/>
            <KidsChart/>
            <KidsCynthia/>
        </Fragment>
    );
};

export default KidsPage;
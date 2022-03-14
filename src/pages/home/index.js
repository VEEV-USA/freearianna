import React, {Fragment} from 'react';
import HomeHero from "./components/hero";
import HomeStory from "./components/story";
import HomeCriminals from "./components/criminals";
import HomeExtortion from "./components/extortion";
import HomeMine from "./components/mine";
import HomeShare from "./components/share";
import HomeTable from "./components/table";
import HomeLast from "./components/last";

const HomePage = () => {
    return (
        <Fragment>
            <HomeHero/>
            <HomeStory/>
            <HomeCriminals/>
            <HomeExtortion/>
            <HomeMine/>
            <HomeShare/>
            <HomeTable/>
            <HomeLast/>
        </Fragment>
    );
};

export default HomePage;
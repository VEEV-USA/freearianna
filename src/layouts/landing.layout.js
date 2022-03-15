import React from 'react';
import {Routes, Route} from "react-router-dom";
import {BackTop, Layout} from "antd";
import LayoutHeader from "./components/header";
import LayoutFooter from "./components/footer";
import HomePage from "../pages/home";
import TakeActionPage from "../pages/takeAction";
import KidsPage from "../pages/kids";
import FightPage from "../pages/fight";
import {ArrowUpOutlined} from "@ant-design/icons";
import CircleButton from "../components/button/circle";
import DonatePage from "../pages/donate";

const {Content} = Layout

const LandingLayout = () => {
    return (
        <Layout>
            <LayoutHeader/>
            <Content>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/kids' element={<KidsPage/>}/>
                    <Route path='/fight' element={<FightPage/>}/>
                    <Route path='/take-action' element={<TakeActionPage/>}/>
                    <Route path='/donate' element={<DonatePage/>}/>
                </Routes>
            </Content>
            <LayoutFooter/>
            {/*<BackTop*/}
            {/*    style={{right: '50px', bottom: '32px'}}*/}
            {/*    children={*/}
            {/*        <CircleButton>*/}
            {/*            <ArrowUpOutlined/>*/}
            {/*        </CircleButton>*/}
            {/*    }*/}
            {/*/>*/}
        </Layout>
    );
};

export default LandingLayout;
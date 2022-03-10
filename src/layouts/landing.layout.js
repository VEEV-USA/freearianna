import React from 'react';
import {Layout} from "antd";
import { Routes, Route} from "react-router-dom";
import HomePage from "../pages/home";
import TakeActionPage from "../pages/takeAction";

const {Header, Footer, Content} = Layout

const LandingLayout = () => {
    return (
        <Layout>
           <Header>

           </Header>
            <Content>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/takeaction' element={<TakeActionPage/>}/>
                </Routes>
            </Content>
            <Footer>

            </Footer>
        </Layout>
    );
};

export default LandingLayout;
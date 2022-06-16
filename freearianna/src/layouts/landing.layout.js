import React from "react";
import { Routes, Route } from "react-router-dom";
import { BackTop, Layout } from "antd";
import LayoutHeader from "./components/header";
import LayoutFooter from "./components/footer";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import AriannaPage from "../pages/arianna";
import CreatePage from "../pages/create";
import LoginPage from "../pages/login";
import Dashboard from "../pages/dashboard";
import DonatePage from "../pages/donate";
import EventsPage from "../pages/events";
import KidsPage from "../pages/kids";
import RecallPage from "../pages/recall";
// import RecallsPage from "../pages/recalls";
import RecallnowPage from "../pages/recallnow";
import TakeActionPage from "../pages/takeAction";
import { ArrowUpOutlined } from "@ant-design/icons";
import CircleButton from "../components/button/circle";
// import ProfileEditor from "../pages/profileeditor";
import Profilelist from "../pages/profilelist";

const { Content } = Layout;

const LandingLayout = () => {
  return (
    <Layout>
      <LayoutHeader />
      <Content style={{ minHeight: "calc(100vh - 154px)" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/arianna" element={<AriannaPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recall" element={<RecallPage />} />
          {/* <Route path="/recalls" element={<RecallsPage />} /> */}
          <Route path="/recallnow/:id/:username" element={<RecallnowPage />} />
          <Route path="/take-action" element={<TakeActionPage />} />
          {/* <Route path="/profileeditor" element={<ProfileEditor />} /> */}
          <Route path="/profilelist/:address" element={<Profilelist />} />
        </Routes>
      </Content>
      <LayoutFooter />
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

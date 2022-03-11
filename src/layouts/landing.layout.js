import React, {Fragment, useState} from 'react';
import {Button, Col, Drawer, Grid, Layout, Menu, Row} from "antd";
import {AlignLeftOutlined} from '@ant-design/icons';
import {Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "../pages/home";
import TakeActionPage from "../pages/takeAction";
import LogoText, {LogoTextLight} from "./styles/header/logo";
import Container from "../components/paper/container";
import {TwitterIcon} from "../components/icons/social";
import CircleButton from "../components/button/circle";
import Copyright from "../components/paragraph/copyright";
import HamburgerButton from "../components/button/hamburger";

const {useBreakpoint} = Grid;
const {Header, Footer, Content} = Layout

const LandingLayout = () => {
    const [visible, setVisible] = useState(false);
    const breakpoints = useBreakpoint();
    const navigate = useNavigate();

    const navigateHandler = (data) => {
        console.log(data.key)
        setVisible(false);
        navigate(data.key)
    }

    return (
        <Layout>
           <Header>
                <Container>
                    <Row
                        justify='space-between'
                        align='middle'
                    >
                        <Col>
                            <LogoText>
                                <Link to='/'>
                                    Free Arianna
                                </Link>
                            </LogoText>
                        </Col>
                        <Col>
                            {
                                breakpoints.lg ? (
                                    <Row
                                        gutter={20}
                                    >
                                        <Col>
                                            <Button type='link'>
                                                ARIANNA'S STORY
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button type='link'>
                                                PROFITING FROM KIDS
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button type='link'>
                                                THE FIGHT
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button type='link' onClick={()=>{navigate('/take-action')}}>
                                                TAKE ACTION
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button type='primary'>
                                                DONATE
                                            </Button>
                                        </Col>
                                    </Row>
                                ) : (
                                    <Fragment>
                                        <HamburgerButton
                                            type='primary'
                                            size='large'
                                            onClick={()=>{setVisible(true)}}
                                        >
                                            <AlignLeftOutlined />
                                        </HamburgerButton>
                                        <Drawer
                                            visible={visible}
                                            onClose={()=>{setVisible(false)}}
                                            title={
                                                <LogoTextLight onClick={()=>{setVisible(false)}} style={{color: '#CE3DAF!important'}}>
                                                    <Link to='/'>
                                                        Free Arianna
                                                    </Link>
                                                </LogoTextLight>
                                            }
                                            closeIcon={<></>}
                                        >
                                            <Menu
                                                onClick={navigateHandler}
                                            >
                                                <Menu.Item key='story'>
                                                    ARIANNA'S STORY
                                                </Menu.Item>
                                                <Menu.Item key='kids'>
                                                    PROFITING FROM KIDS
                                                </Menu.Item>
                                                <Menu.Item key='fight'>
                                                    THE FIGHT
                                                </Menu.Item>
                                                <Menu.Item key='take-action'>
                                                    TAKE ACTION
                                                </Menu.Item>
                                                <Menu.Item key='donate' className='btn'>
                                                    DONATE
                                                </Menu.Item>
                                            </Menu>
                                        </Drawer>
                                    </Fragment>
                                )
                            }
                        </Col>
                    </Row>
                </Container>
           </Header>
            <Content style={{minHeight: 'calc(100vh - 72px)'}}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/take-action' element={<TakeActionPage/>}/>
                </Routes>
            </Content>
            <Footer>
                <Container>
                    <Row
                        align='middle'
                        justify='space-between'
                        gutter={[20, 12]}
                    >
                        <Col lg={{span: 8}} span={24}>
                            <Row
                                gutter={20}
                                justify="center"
                                style={{justifyContent: breakpoints.lg ? "flex-start" : "center"}}
                            >
                                <Col>
                                    <Button type='text'>
                                        About
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type='text'>
                                        Privacy
                                    </Button>
                                </Col>
                            </Row>

                        </Col>
                        <Col lg={{span: 8}} span={24}>
                            <Row
                                justify='center'
                            >
                                <Col>
                                    <CircleButton target='_blank' href='https://twitter.com/freearianna'>
                                        <TwitterIcon width={22} color='#ffffff'/>
                                    </CircleButton>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={{span: 8}} span={24}>
                            <Row
                                justify='center'
                                gutter={20}
                                style={{justifyContent: breakpoints.lg ? "flex-end" : "center"}}
                            >
                                <Col>
                                    <Copyright>Copyright © Free Arianna 2022</Copyright>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        </Layout>
    );
};

export default LandingLayout;
import React, {Fragment, useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';
import {Button, Col, Drawer, Grid, Layout, Menu, Row} from "antd";
import Container from "../../components/paper/container";
import LogoText, {LogoTextLight} from "../styles/header/logo";
import HamburgerButton from "../../components/button/hamburger";
import {MenuOutlined} from "@ant-design/icons";

const {useBreakpoint} = Grid;
const {Header} = Layout

const LayoutHeader = () => {
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(0);
    const breakpoints = useBreakpoint();
    const navigate = useNavigate();
    const location = useLocation();

    const navigateHandler = (data) => {
        console.log(data.key)
        setVisible(false);
        if (data.key !== '#arianna') {
            navigate(data.key)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)
        })

        if (location.hash !== '#arianna') {
            window.scrollTo(0, 0)
        }

        return window.removeEventListener("scroll", () => {
        })
    }, [location])

    return (
        <Header style={(location.pathname === '/' && scroll < 150) ? {
            position: "absolute",
            width: '100%',
            backgroundColor: 'transparent'
        } : {}}>
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
                    
                </Row>
            </Container>
        </Header>
    );
};

export default LayoutHeader;
import React from 'react';
import {Button, Col, Grid, Layout, Row} from "antd";
import Container from "../../components/paper/container";
import CircleButton from "../../components/button/circle";
import {TwitterIcon} from "../../components/icons/social";
import Copyright from "../../components/paragraph/copyright";

const {Footer} = Layout
const {useBreakpoint} = Grid;

const LayoutFooter = () => {

    const breakpoints = useBreakpoint();

    return (
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
                                <CircleButton
                                    target='_blank'
                                    href='https://twitter.com/freearianna'
                                >
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
    );
};

export default LayoutFooter;
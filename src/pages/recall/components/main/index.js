import React from 'react';
import AriannaMainWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Card, Col, Row, Space} from "antd";
import VideoPlayer from "../../../../components/player";
import CardTitle from "../../../../components/heading/card";
import P1 from "../../../../components/paragraph";
import ActionFormCard from "../../../takeAction/components/action/style/form-card";
import Img1 from "../../../../assets/img/painting.jpg"
import Img2 from "../../../../assets/img/arianna-poster200.png"
import Img3 from "../../../../assets/img/isaac.jpg"


const AriannaMain = () => {
    return (
        <AriannaMainWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}
                >
                    {/* <SectionTitle>
                        The Free Arianna Movement
                    </SectionTitle> */}
                    <Row
                        gutter={[32, 32]}
                    >
                        <Col lg={{span: 12}} span={24}>
                            <ActionFormCard>
                                <CardTitle>
                                    {/* 20,904,371 */}
                                </CardTitle>
                                <CardTitle style={{marginBottom: 32}}>
                                    Ongoing Recalls<br/><br/>
                                    <img src="https://happywall-img-gallery.imgix.net/8533/usa_map_in_fun_colors_display.jpg"></img>
                                </CardTitle>
                                {/* <a
                                    rel='noreferrer'
                                    href='https://www.facebook.com/isaac.doe1'
                                    target='_blank'
                                >
                                    <img src={Img3} alt=""/>
                                </a> */}
                                <CardTitle style={{marginBottom: 32}}>
                                {/* <a
                                    rel='noreferrer'
                                    href='https://www.facebook.com/isaac.doe1'
                                    target='_blank'
                                >
                                    #JusticeForCaasi
                                </a> */}
                                </CardTitle>
                                {/* <a
                                    rel='noreferrer'
                                    href='https://www.latimes.com/la-he-0629-schizophrenia-pictures-photogallery.html'
                                    target='_blank'
                                >
                                    <img src='https://ca-times.brightspotcdn.com/dims4/default/2516d02/2147483647/strip/true/crop/586x433+0+0/resize/586x433!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6b%2Ff7%2Fbd9258cc96bfb36e128c0b352ec1%2Fla-he-schizo01-kklbh5nc' alt=""/>
                                </a> */}
                                <CardTitle>
                                {/* <a
                                    rel='noreferrer'
                                    target='_blank'
                                    href='https://www.latimes.com/la-he-0629-schizophrenia-pictures-photogallery.html'
                                >
                                    #JusticeForBohdi
                                </a> */}
                                </CardTitle>
                            </ActionFormCard>
                        </Col>
                        <Col lg={{span: 12}} span={24}>
                            <ActionFormCard>
                                <CardTitle>
                                    {/* 20,904,371 */}
                                </CardTitle>
                                <CardTitle style={{marginBottom: 32}}>
                                    Start Recall
                                </CardTitle>
                                {/* <a
                                    rel='noreferrer'
                                    href='https://www.facebook.com/isaac.doe1'
                                    target='_blank'
                                >
                                    <img src={Img3} alt=""/>
                                </a> */}
                                <CardTitle style={{marginBottom: 32}}>
                                {/* <a
                                    rel='noreferrer'
                                    href='https://www.facebook.com/isaac.doe1'
                                    target='_blank'
                                >
                                    #JusticeForCaasi
                                </a> */}
                                </CardTitle>
                                {/* <a
                                    rel='noreferrer'
                                    href='https://www.latimes.com/la-he-0629-schizophrenia-pictures-photogallery.html'
                                    target='_blank'
                                >
                                    <img src='https://ca-times.brightspotcdn.com/dims4/default/2516d02/2147483647/strip/true/crop/586x433+0+0/resize/586x433!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6b%2Ff7%2Fbd9258cc96bfb36e128c0b352ec1%2Fla-he-schizo01-kklbh5nc' alt=""/>
                                </a> */}
                                <CardTitle>
                                {/* <a
                                    rel='noreferrer'
                                    target='_blank'
                                    href='https://www.latimes.com/la-he-0629-schizophrenia-pictures-photogallery.html'
                                >
                                    #JusticeForBohdi
                                </a> */}
                                </CardTitle>
                            </ActionFormCard>
                        </Col>
                    </Row>
                </Space>
            </Container>
        </AriannaMainWrap>
    );
};

export default AriannaMain;
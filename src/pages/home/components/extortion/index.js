import React from 'react';
import HomeExtortionWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Card, Col, Row, Space} from "antd";
import CardTitle from "../../../../components/heading/card";
import Cover1 from '../../../../assets/pdf/bj1.jpg'

const data = [
    {
        cover: Cover1,
        pdf: '/',
        title: 'False Billing',
        items: [
            'Cynthia Lie (License #177986)',
            'Scott Reno (License #315247)'
        ]
    }, {
        cover: Cover1,
        pdf: '/',
        title: 'Extortion Payments',
        items: [
            'Brenda Joy (BJ) Fadem (License #118819)',
            'Katrina Ohde (License #254049)'
        ]
    }, {
        cover: Cover1,
        pdf: '/',
        title: 'Committing Fraud Upon The Court',
        items: [
            'Nathalie Lezama Ferro (License #268398)',
            'Shalini Venktash (LMFT License #84805)'
        ]
    }, {
        cover: Cover1,
        pdf: '/',
        title: 'Fraud & Siphoning Assets',
        items: [
            'Kevin Boileau (License #131837)',
            'Joe Perez Corrupt San Jose Police'
        ]
    }
]

const HomeExtortion = () => {
    return (
        <HomeExtortionWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}
                >
                    <SectionTitle>
                        Extortion Payments of $700,000
                    </SectionTitle>
                    <Row
                        gutter={[40, 40]}
                    >
                        {
                            data.map((dat, key) => (
                                <Col lg={6} md={12} sm={12} span={24} key={key}>
                                    <Card
                                        style={{textAlign: 'center'}}
                                        cover={
                                            <a
                                                rel="noreferrer"
                                                style={{display: 'block', width: '100%'}}
                                                target='_blank'
                                                href={`${window.location.origin}/pdf/bj1.pdf`}
                                            >
                                                <img src={Cover1} alt=""/>
                                            </a>
                                        }
                                        bordered={false}
                                        className='pdf-card'
                                    >
                                        <CardTitle>
                                            <a
                                                rel="noreferrer"
                                                href={`${window.location.origin}/pdf/bj1.pdf`}
                                                target='_blank'
                                            >
                                                {dat.title}
                                            </a>
                                        </CardTitle>
                                        {
                                            dat.items.map((item, index) => (
                                                <p key={`index${index}`}>
                                                    {item}
                                                </p>
                                            ))
                                        }
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Space>
            </Container>
        </HomeExtortionWrap>
    );
};

export default HomeExtortion;
import React, {Fragment} from 'react';
import Wrap, {Wrap0, Wrap1} from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import Image1 from '../../../../assets/img/bjfadem.jpg'
import {Avatar, Card, Col, Row} from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import CardTitle from "../../../../components/heading/card";


const data = [
    {
        cover: `pdf/kevinboileau1.pdf`,
        pdf: `${window.location.origin}/pdf/kevinboileau1.pdf`,
        // pdf: `.../../../../assets/pdf/bjfadem1.pdf`,
        title: 'Test',
        items: [
            'Test',
        ]
    } 
]

const KidsCriminalTest = () => {

    return (
        <Fragment>
            <Container style={{marginTop: 21}}>
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
                                            href={dat.pdf}
                                        >
                                            <embed src={dat.cover} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle>
                                        <a
                                            rel="noreferrer"
                                            href={dat.pdf}
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
            </Container>
        </Fragment>
    );
};

export default KidsCriminalTest;
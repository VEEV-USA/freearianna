import React, {Fragment} from 'react';
import TakeActionWrap from "./style/wrap";
import Wrap, {Wrap1} from "./style/wrap";
import {Avatar, Card, Col, Row} from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import Container from "../../../../components/paper/container";
//import {Col, Row, Space} from "antd";
import TakeActionItem from "./item";
import Image1 from '../../../../assets/img/cynthialie.png'
import TakeActionForm from "./form";
import CardTitle from "../../../../components/heading/card";


const data = [
    {
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/bjfadem1.pdf`,
        title: 'Rape Charges',
        items: [
            'Rape charges',
        ]
    }, {
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/nathalieferro2.pdf`,
        title: 'Extortion Charges',
        items: [
            'test',
        ]
    }, {
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/nathalieferro1.pdf`,
        title: 'Bribery Charges',
        items: [
            'test',
        ]
    }, {
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/reshmakumar-fraud.pdf`,
        title: 'Sexual Abuse',
        items: [
            'test',
        ]
    }

]

const TakeActionContent = () => {

return (
        <Fragment>
            <Wrap1>
                <Container>
                    <Row gutter={[40, 52]} >
                        <Col lg={{span: 24}} span={24}>
                            <TakeActionForm/>
                        </Col>
                    </Row>
                </Container>
            </Wrap1>
        </Fragment>
    );
};

export default TakeActionContent;
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
import { Link, useNavigate } from "react-router-dom";

const TakeActionContent = () => {

return (
        <Fragment>
            <Wrap1>
                <Container>
                    <Row gutter={[40, 52]} >
                        <Col lg={{span: 20}} span={24}>
                            <TakeActionForm/>
                        </Col>
                        <Col lg={{span: 4}} span={24}>
                            <h2>Submitted Recalls</h2>
                            <Link to="/">
                                <P1>Cynthia Lie</P1>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Wrap1>
        </Fragment>
    );
};

export default TakeActionContent;
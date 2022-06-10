import React from 'react';
import TakeActionWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import TakeActionForm from "./form";
import {Link,useNavigate} from "react-router-dom";
import P1 from "../../../../components/paragraph";

const TakeActionContent = () => {
    return (
        <TakeActionWrap>
            <Container>
                <Row
                    gutter={[40, 52]}
                >
                    <Col lg={{span: 8}} span={24}>
                        
                    </Col>
                    <Col lg={{span: 8}} span={24}>
                        <TakeActionForm/>
                        
                        <p style={{textAlign: 'center', textColor: 'black'}}>
                        <br></br>    
                        <Link to='/create'>
                        <h2>Create Account</h2>
                        </Link>
                        </p>
                        
                    </Col>
                    <Col lg={{span: 8}} span={24}>

                    </Col>
                </Row>
            </Container>
        </TakeActionWrap>
    );
};

export default TakeActionContent;
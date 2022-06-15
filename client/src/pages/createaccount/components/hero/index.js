import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import KidsHeroWrap from "./style/wrap";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
// import Container from "../../../../components/paper/container";

const KidsHero = () => {

  let navigate = useNavigate();

  const onFinish = (values) => {
    navigate('/profileeditor');
    console.log('Finish:', values);
  };

  return (
    <KidsHeroWrap>
      <Container>
        <h4>Create Recall Account</h4>
        <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} initialValues={{ require: true, }} onFinish={onFinish} >
          <Row>
            <Col span={12}>
              <Form.Item label="Name" name="name" rules={[{required: true, message: 'Please input your name!',},]} >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Last Name" name="last name" >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Email Address" name="email address" rules={[{required: true, message: 'Please input your email address!',},]} >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Phone" name="phone" rules={[{required: true, message: 'Please input your phone number!',},]} >
                <Input />
              </Form.Item>
            </Col>
          </Row>             
          <Row><Col span={8}>
            <Form.Item name="require" wrapperCol={{ offset: 6, span: 18 }} valuePropName="checked" >
              <Checkbox> I agree to the Terms & Conditions</Checkbox>
            </Form.Item>
          </Col></Row>     
          <Row>
            <Form.Item wrapperCol={{ offset: 18, span: 6 }} >
              <Button type="primary" htmlType="submit">Create Account</Button>
            </Form.Item>
          </Row>  
        </Form>
      </Container>
    </KidsHeroWrap>
  );
};

export default KidsHero;

const Container = styled.div`
  width: 100%;
  max-width: 1348px;
  margin: auto;
`
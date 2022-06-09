import React, {useState} from 'react';
import ActionFormCard from "./style/form-card";
import {Button, Checkbox, Form, Input, Progress, Space, message} from "antd";
import {snsClient} from "../../../../untils/aws";
import { SubscribeCommand} from "@aws-sdk/client-sns";
import {useNavigate} from "react-router-dom";

const {Item, useForm} = Form;

const TakeActionForm = () => {

    const navigate = useNavigate();
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const onFinish = (values) => {
        navigate('/profileeditor');
        console.log('Finish:', values);
      };
    
      return (
        <ActionFormCard>
            {
                !success ? (
                    <Space
                        direction='vertical'
                        size={12}
                        style={{width: '100%'}}
                    >
                        <div>
                            <Form
                                layout='vertical'
                                form={form}
                                initialValues={{ require: true, }} 
                                onFinish={onFinish}
                            >
                                <Item
                                    name='firstName'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Firstname is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='First Name'/>
                                </Item>
                                <Item
                                    name='lastName'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lastname is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Last Name'/>
                                </Item>
                                <Item
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Email is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Email'/>
                                </Item>
                                <Item
                                    name='phone'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Phone number is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Phone'/>
                                </Item>
                                <Item>
                                    <Checkbox
                                        onChange={(event) => {setChecked(event.target.checked)}}
                                    >
                                        I Agree To Terms & Conditions.
                                    </Checkbox>
                                </Item>
                                <Item>
                                    <Button
                                        type='primary'
                                        size='large'
                                        block
                                        htmlType='submit'
                                        loading={loading}
                                        disabled={!checked}
                                    >
                                        <p style={{textAlign: 'center', color: 'black'}}>Submit</p>
                                    </Button>
                                </Item>
                            </Form>
                        </div>
                    </Space>
                ) :(
                    <div>
                        
                    </div>
                )
            }
        </ActionFormCard>
    );
};

export default TakeActionForm;
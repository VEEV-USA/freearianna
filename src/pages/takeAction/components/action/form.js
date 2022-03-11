import React from 'react';
import ActionFormCard from "./style/form-card";
import {Button, Checkbox, Form, Input, Progress, Space} from "antd";

const {Item} = Form;

const TakeActionForm = () => {
    const finishHandler = (value) => {
        console.log(value)
    }
    return (
        <ActionFormCard>
            <Space
                direction='vertical'
                size={12}
                style={{width: '100%'}}
            >
                <Progress
                    percent={50}
                    strokeWidth={20}
                    showInfo={false}
                    strokeColor='#CE3DAF'
                />
                <p style={{textAlign: 'center'}}>403 of 500 signatures</p>
                <div>
                    <h2>Sign This Petition</h2>
                    <Form
                        layout='vertical'
                        onFinish={finishHandler}
                    >
                        <Item
                            name='firstName'
                        >
                            <Input size='large' placeholder='First Name'/>
                        </Item>
                        <Item
                            name='lastName'
                        >
                            <Input size='large' placeholder='Last Name'/>
                        </Item>
                        <Item
                            name='email'
                        >
                            <Input size='large' placeholder='Email'/>
                        </Item>
                        <Item
                            name='zipcode'
                        >
                            <Input size='large' placeholder='Zip Code'/>
                        </Item>
                        <Item
                            name='phone'
                        >
                            <Input size='large' placeholder='Phone'/>
                        </Item>
                        <Item>
                            <Checkbox>
                                Receive mobile alerts from VEEV App on behalf of FreeArianna.org. Recurring messages.
                                Msg & data rates may apply. Text STOP to 668366 to stop receiving messages. Text HELP to
                                668366 for more information.
                                &nbsp;<a>Privacy</a>
                            </Checkbox>
                        </Item>
                        <Item>
                            <Button
                                type='primary'
                                size='large'
                                block
                                htmlType='submit'
                            >
                                Sign
                            </Button>
                        </Item>
                    </Form>
                </div>
            </Space>
        </ActionFormCard>
    );
};

export default TakeActionForm;
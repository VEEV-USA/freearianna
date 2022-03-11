import React, {useState} from 'react';
import ActionFormCard from "./style/form-card";
import {Button, Checkbox, Form, Input, Progress, Space, message} from "antd";
import {snsClient} from "../../../../untils/aws";
import { SubscribeCommand} from "@aws-sdk/client-sns";

const {Item} = Form;



const TakeActionForm = () => {

    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const finishHandler = (data) => {
        setLoading(true)
        //TODO: SNS SERVICE SETTINGS
        const params = {
            Protocol: 'email',
            TopicArn: "arn:aws:sns:us-east-1:095719380237:freearianna",
            Endpoint: data.email,
        };

        snsClient.send(new SubscribeCommand(params))
            .then((res) => {
                console.log(res, "SUCCESS")
                message.success('Your email was registered in our subscribe list.')
            })
            .catch((err) => {
                console.log(err, 'ERROR')
            })
            .finally(()=>{
                setLoading(false);
            })

        const phoneParams = {
            Protocol: 'sms',
            TopicArn: "arn:aws:sns:us-east-1:095719380237:freearianna",
            Endpoint: data.phone,
        };

        setLoading(true)
        snsClient.send(new SubscribeCommand(phoneParams))
            .then((res) => {
                console.log(res, "SUCCESS")
                message.success('Your phone number was registered in our subscribe list.')
            })
            .catch((err) => {
                console.log(err, 'ERROR')
            })
            .finally(()=>{
                setLoading(false)
            })

    }
    return (
        <ActionFormCard>
            <Space
                direction='vertical'
                size={12}
                style={{width: '100%'}}
            >
                <Progress
                    percent={403/500*100}
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
                            <Checkbox
                                onChange={(event) => {setChecked(event.target.checked)}}
                            >
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
                                loading={loading}
                                disabled={!checked}
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
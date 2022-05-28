import React, {useEffect, useState} from 'react';
import ActionFormCard from "./style/form-card";
import {Button, Checkbox, Form, Input, Progress, Space, message, Select } from "antd";
import {snsClient} from "../../../../untils/aws";
import { SubscribeCommand} from "@aws-sdk/client-sns";
import SectionTitle from "../../../../components/heading/section";
import LogoText from "../../../../layouts/styles/header/logo";
import Banner1 from '../../../../assets/img/arianna-poster300.jpg'
import {useNavigate} from "react-router-dom";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import addressData from './address.json';
// import toast, { Toaster } from "https://cdn.skypack.dev/react-hot-toast@2.2.0";
// toast.success('Successfully Create!');

import { createUser,updateUser, initUser ,getProfile} from '../../../../redux/action-creators/users';
import { setAlert } from '../../../../redux/action-creators/alert';

// import { Loading, Alert } from './utils';

const {Item, useForm} = Form;
const { Option } = Select;

const TakeActionForm = ({  setAlert,
    person,
    preUserData,
    alertContent,
    history,
    createSuccess,
    isLoading,
    error
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        user_state:'',
        email:'',
        zipcode:0,
        address:'',
        phone:0,
        person:""

    });

    useEffect(()=>{
    userData.person = person
    },[])
        
    const { firstname, lastname, email,zipcode,user_state, phone, address} = userData;
  
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(updateUser(userData,history));

  };

  
  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
//   const handleSelect = e => {
//     setUserData({...userData,[address]:e.target.value});
//   };
  const handleOnChange = (value, event) => {
    setUserData({ ...userData, address: value });      
}

    return (
        <ActionFormCard>
            {
                !success ? (
                    <Space
                        direction='vertical'
                        size={12}
                        style={{width: '100%'}}>
                            <Progress
                            percent={403/500*100}
                            strokeWidth={20}
                            showInfo={false}
                            strokeColor='#CE3DAF'
                        />
                        <p style={{textAlign: 'center'}}>403 of 500 signatures</p> 
                        <div>
                            <h2>Sign Petition</h2>
                            <Form
                                layout='vertical'
                                
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
                                    <Input size='large' name='firstname' value={firstname} onChange={e => handleChange(e)} placeholder='First Name'/>
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
                                    <Input size='large' name='lastname'  value={lastname} onChange={e => handleChange(e)} placeholder='Last Name'/>
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
                                    <Input size='large' name='email' value={email} onChange={e => handleChange(e)} placeholder='Email'/>
                                </Item>
                                <Item
                                    name='zipcode'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Zipcode is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' name='zipcode'  value={zipcode} onChange={e => handleChange(e)} placeholder='Zip Code'/>
                                </Item>
                                <Item
                                    name='phone'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'phone is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' name='phone'  value={phone} onChange={e => handleChange(e)} placeholder='Phone Number'/>
                                </Item>
                                <Item
                                    name='user_state'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'phone is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' name='user_state'  value={user_state} onChange={e => handleChange(e)} placeholder='State'/>
                                </Item>

                                <Select name="address" style={{ width: "100%"}}  onSelect={(value, event) => handleOnChange(value, event)} placeholder="Please select a address">
                                { addressData.map((data,index) =>(
                                        <Option value={data.name} name="address" key={index}>{data.name}</Option>
                                    ))
                                }
                                    
                                </Select>
                               
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
                                        onClick={e => handleCreate(e)}
                                    >
                                        <p style={{textAlign: 'center', color: 'black'}}>Sign</p>
                                    </Button>
                                </Item>
                            </Form>
                        </div>
                    </Space>
                ) :(
                    <div style={{textAlign: 'center'}}>
                        <SectionTitle>
                            <b>Thank You</b>
                        </SectionTitle>
                        <h3>
                            For signing my petition, I will send you periodic updates.
                        </h3>
                        <LogoText style={{color: '#CE3DAF', marginBottom: 24}}>
                            Love Arianna
                        </LogoText>
                        <img src={Banner1} alt="" style={{marginBottom: 32}}/>
                        <Button type='primary' size='large' onClick={()=>{navigate('/donate')}}>
                            DONATE
                        </Button>
                    </div>
                )
            }
            {/* <Toaster  position="top-right" /> */}
        </ActionFormCard>
    );
};

const mapStateToProps = state => {
    return {
      alertContent: state.alert.alertContent,
      createSuccess: state.createUser.createSuccess,
      isLoading: state.createUser.isLoading,
      error: state.createUser.error
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
   
      updateUser: (data, navigate) => dispatch(updateUser(data, navigate))
      
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TakeActionForm);
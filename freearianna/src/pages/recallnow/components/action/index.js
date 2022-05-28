import React, {Fragment,useState, useEffect} from 'react';
import { connect } from 'react-redux';
import TakeActionWrap from "./style/wrap";
import Wrap, {Wrap1} from "./style/wrap";
import {Avatar, Card, Col, Row} from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import Container from "../../../../components/paper/container";
import TakeActionItem from "./item";
import Image1 from '../../../../assets/img/cynthialie.png'
import TakeActionForm from "./form";
import CardTitle from "../../../../components/heading/card";
import { getProfile, setUserList } from '../../../../redux/action-creators/users';



const data = [
    {
        title: 'Rape Charges',
    }, 
    {
        title: 'Extortion Charges',
    }, 
    {
        title: 'Bribery Charges',
    }, 
    {
        title: 'Sexual Abuse',
    }
]

const TakeActionContent = ({person,getProfile,user}) => {
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        full_name: '',
        license: '',
        signatures_Require: '',
        case_name:'',
        email:'',
        zipcode:0,
        address:'',
        phone:0,
        state:'',
        country: '',
        user_avatar:'',
        page_title:'',
        page_contents:'',
        pdf1:'',
        pdf1_title:"",
        pdf2_title:"",
        pdf3_title:"",
        pdf4_title:"",
        pdf2:'',
        pdf3:'',
        pdf4:'',

    });
    useEffect(()=>{
        getProfile(person,setUserData);

    },[])

return (
        <Fragment>
            {/* <Wrap>
                <Container>
                    <SectionTitle>
                        Cynthia Lie Runs A Criminal Enterprise Using The Courts Profiting From Pedophiles & False
                        Domestic Violence
                    </SectionTitle>
                </Container>
            </Wrap> 
            <img src={Image} alt="" style={{width: '100%', height: 200}}/> */}
            <Wrap1>
                <Container>
                    <Row gutter={[40, 52]} >
                    <Col lg={{span: 17}} span={24}>
                    <Media>
                        <Avatar src={userData.user_avatar} size={200}/>
                        <div>
                            <h3>
                                {userData.full_name}
                            </h3>
                            <P1>
                                {userData.page_title}
                            </P1>
                        </div>
                    </Media>
                    <P1>
                        {userData.page_contents}
                    </P1>
                    </Col>
                    <Col lg={{span: 7}} span={24}>
                        <TakeActionForm person={person} preUserData={userData} />
                    </Col>
                    </Row>
                </Container>
            </Wrap1>
            <Container style={{marginTop: 21}}>
                <Row
                    gutter={[40, 40]}
                >
                    {/* {
                        data.map((dat, key) => ( */}
                            <Col lg={6} md={12} sm={12} span={24} >
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={userData.pdf1}
                                        >
                                            <embed src={userData.pdf1} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle>
                                        <a
                                            rel="noreferrer"
                                            href={userData.pdf1}
                                            target='_blank'
                                        >
                                            {userData.pdf1_title}
                                        </a>
                                    </CardTitle>
                                    
                                    {/* {
                                        dat.items.map((item, index) => (
                                            <p key={`index${index}`}>
                                                {item}
                                            </p>
                                        ))
                                    } */}
                                </Card>
                            </Col>
                            <Col lg={6} md={12} sm={12} span={24} >
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={userData.pdf2}
                                        >
                                            <embed src={userData.pdf2} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle>
                                    
                                        <a
                                            rel="noreferrer"
                                            href={userData.pdf2}
                                            target='_blank'
                                        >
                                            {userData.pdf2_title}
                                        </a>
                                    </CardTitle>
                                    
                                    {/* {
                                        dat.items.map((item, index) => (
                                            <p key={`index${index}`}>
                                                {item}
                                            </p>
                                        ))
                                    } */}
                                </Card>
                            </Col>
                            <Col lg={6} md={12} sm={12} span={24} >
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={userData.pdf3}
                                        >
                                            <embed src={userData.pdf3} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle >
                                        <a
                                            rel="noreferrer"
                                            href={userData.pdf3}
                                            target='iframe_a'
                                        >
                                            {userData.pdf3_title}
                                        </a>
                                    </CardTitle>
                                    
                                    {/* {
                                        dat.items.map((item, index) => (
                                            <p key={`index${index}`}>
                                                {item}
                                            </p>
                                        ))
                                    } */}
                                </Card>
                            </Col>
                            <Col lg={6} md={12} sm={12} span={24} >
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={userData.pdf4}
                                        >
                                            <embed src={userData.pdf4} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle>
                                        <a
                                            rel="noreferrer"
                                            href={userData.pdf4}
                                            target='_blank'
                                        >
                                            {userData.pdf4_title}
                                        </a>
                                    </CardTitle>
                                    
                                    {/* {
                                        dat.items.map((item, index) => (
                                            <p key={`index${index}`}>
                                                {item}
                                            </p>
                                        ))
                                    } */}
                                </Card>
                            </Col>
                        {/* ))
                    } */}
                </Row>
            </Container>
        </Fragment>
    );
};


const mapStateToProps = state => {
    return {
    
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getProfile: (id, setUserData) => dispatch(getProfile(id, setUserData))
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TakeActionContent);
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

const TakeActionContent = ({person}) => {
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
                        <Avatar src={person.user_avatar} size={200}/>
                        <div>
                            <h3>
                                {person.full_name}
                            </h3>
                            <p>{person.state}&nbsp;&nbsp;&nbsp;{person.country}&nbsp;&nbsp;&nbsp;{person.license}&nbsp;&nbsp;{person.case_name}</p>
                            <P1>
                                {person.page_title}
                            </P1>
                        </div>
                    </Media>
                    <P1>
                        {person.page_contents}
                    </P1>
                    </Col>
                    <Col lg={{span: 7}} span={24}>
                        <TakeActionForm person={person} />
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
                                            href={person.pdf1}
                                        >
                                            <embed src={person.pdf1} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle>
                                        <a
                                            rel="noreferrer"
                                            href={person.pdf1}
                                            target='_blank'
                                        >
                                            {person.pdf1_title}
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
                                            href={person.pdf2}
                                        >
                                            <embed src={person.pdf2} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle>
                                    
                                        <a
                                            rel="noreferrer"
                                            href={person.pdf2}
                                            target='_blank'
                                        >
                                            {person.pdf2_title}
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
                                            href={person.pdf3}
                                        >
                                            <embed src={person.pdf3} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle >
                                        <a
                                            rel="noreferrer"
                                            href={person.pdf3}
                                            target='iframe_a'
                                        >
                                            {person.pdf3_title}
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
                                            href={person.pdf4}
                                        >
                                            <embed src={person.pdf4} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle>
                                        <a
                                            rel="noreferrer"
                                            href={person.pdf4}
                                            target='_blank'
                                        >
                                            {person.pdf4_title}
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
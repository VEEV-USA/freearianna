import React,{useState,useEffect} from 'react';
import {AriannaMainWrap,UserList,PersonName,PersonFullName ,LicenseString,ActionContent}from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Card, Col, Row, Space} from "antd";
import CardTitle from "../../../../components/heading/card";
import ActionFormCard from "../../../takeAction/components/action/style/form-card";
import USAMap from "react-usa-map";
import states from "./states.json";
import { useDispatch,connect } from 'react-redux';
import { findProfile } from '../../../../redux/action-creators/users';
import {Link} from "react-router-dom";




const AriannaMain = () => {
    // const color = "red"
    const dispatch = useDispatch();
    const [usa, setUsa] = useState([])
    const [userData, setUserData] = useState([])
    const [something, setSomething] = useState({})
    useEffect(() => {
        setUsa(states);
        statesFilling();
    },[usa])
    const mapHandler = async(event) => {
        const address = event.target.dataset.name;
        const data = await dispatch(findProfile(address,setUserData));
        
    };
    const statesFilling = () => {
        usa.map((state, i) => {
          const { abbreviation, name } = state.attributes;
          let fill = "#C8102E";
          if (name.includes("k")) {
            fill = "#21B205";
          } else if (name.includes("x")) {
            fill = "#DDAC04";
          }
          setSomething(something[abbreviation] = {
            fill,
            clickHandler: () => alert(`Hey This is sam! ${name} is your hfghfghfgh`)
          })
          
        });

    
        return { something };
      };

    return (
        <AriannaMainWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}
                >
                    {/* <SectionTitle>
                        The Free Arianna Movement
                    </SectionTitle> */}
                    <Row
                        gutter={[32, 32]}
                    >
                        <Col lg={{span: 12}} span={24}>
                            <ActionFormCard>
                                <CardTitle>
                                    {/* 20,904,371 */}
                                </CardTitle>
                                <CardTitle style={{marginBottom: 32}}>
                                    Ongoing Recalls<br/><br/>
                                    {/* <img src="https://happywall-img-gallery.imgix.net/8533/usa_map_in_fun_colors_display.jpg"></img> */}
                                    <USAMap customize={something} onClick={mapHandler}  />
                                </CardTitle>
                            </ActionFormCard>
                        </Col>
                        <Col lg={{span: 12}} span={24}>
                            <ActionFormCard>
                                <CardTitle>
                                    {/* 20,904,371 */}
                                </CardTitle>
                                <CardTitle style={{marginBottom: 32}}>
                                    <Link to='/profileeditor'>
                                    Start Recall
                                    </Link>
                                  
                                </CardTitle>
                               
                                <CardTitle style={{marginBottom: 32}}>
                                    {userData.map((person,index) =>(
                                        <UserList key={index}>
                                        <img
                                            src={person.user_avatar}
                                            alt={person.name}
                                            width={100}
                                            height={100}
                                            style={{
                                                borderRadius: 200,
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <div style={{width:'100%'}}>
                                            <PersonName>
                                                {person.full_name}
                                            </PersonName>
                                            <Space>
                                                <PersonFullName>
                                                    {person.full_name}
                                                </PersonFullName>
                                                <LicenseString>
                                                    ({person.lmft && 'LMFT '}License # {person.license})
                                                </LicenseString>
                                            </Space>
                                            <ActionContent>
                                                {person.page_contents.slice(0, 200)}... ... ...
                                            </ActionContent>
                                        </div>
                                        <div> </div>
                                        {/* <div style={{width:'*'}}><TakeActionForm person={person}/></div> */}
                                        </UserList>
                                    ))}
                                
                               
                                </CardTitle>
                            </ActionFormCard>
                        </Col>
                    </Row>
                </Space>
            </Container>
        </AriannaMainWrap>
    );
};

const mapStateToProps = state => {
    return {
    
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        findProfile: (address, setUserData) => dispatch(findProfile(address, setUserData))
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AriannaMain);
import React,{useState,useEffect} from 'react';
import AriannaMainWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Card, Col, Row, Space} from "antd";
import VideoPlayer from "../../../../components/player";
import CardTitle from "../../../../components/heading/card";
import P1 from "../../../../components/paragraph";
import ActionFormCard from "../../../takeAction/components/action/style/form-card";
import Img1 from "../../../../assets/img/painting.jpg"
import Img2 from "../../../../assets/img/arianna-poster200.png"
import Img3 from "../../../../assets/img/isaac.jpg"
import USAMap from "react-usa-map";
import states from "./states.json";

const AriannaMain = () => {
    // const color = "red"
    const [usa, setUsa] = useState([])
    const [something, setSomething] = useState({})
    useEffect(() => {
        setUsa(states);
        statesFilling();
    },[usa])
    const mapHandler = (event) => {
        alert(event.target.dataset.name);
        
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

        console.log("index",something)
    
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
                                    Start Recall
                                </CardTitle>
                               
                                <CardTitle style={{marginBottom: 32}}>
                               
                                </CardTitle>
                            </ActionFormCard>
                        </Col>
                    </Row>
                </Space>
            </Container>
        </AriannaMainWrap>
    );
};

export default AriannaMain;
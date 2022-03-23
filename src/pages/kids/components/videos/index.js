import React from 'react';
import VideoPlayer from "../../../../components/player";
import KidsVideosWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import P1 from "../../../../components/paragraph";

import BlackMenSavedImage from '../../../../assets/img/blackmensaved.png'

const KidsVideos = () => {
    return (
        <KidsVideosWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                >
                    <Row
                        gutter={[20, 20]}
                    >
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://youtu.be/0DcN6wNKxZA'}/>
                        </Col>
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://youtu.be/xq-JrH5tAnw'}/>
                        </Col>
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://youtu.be/4BFxWLa5qu4'}/>
                        </Col>
                    </Row>
                    <div>
                        <P1>
                            Joe Biden, spent his entire life profiting by seperating black kids from their parent's particularly father's with his VAWA bill, destroying families with his Crime Bill and now vacinating kids using emergency powers. He has done every dispicable, vile,
                            inhumane, racist acts to achieve his goal. In 1994, Joe Biden struck gold with the 
                            <a
                                target='_blank'
                                href='https://www.vox.com/policy-and-politics/2019/6/20/18677998/joe-biden-1994-crime-bill-law-mass-incarceration'
                            >
                                1994 Crime Bill, the largest Crime Bill in US history
                            </a>.
                        </P1>
                        <P1>
                            Joe Biden, was the Private Industrial Prison Complex's sales man in Washington. He used his
                            position to write legistlation that profited the Industrial Prison Complex. The legistation
                            forcibly locked up innoccent people for profit. The legistlation was used as a vehicle to
                            transfer tax payer dollars starting with $12 billion a year into the pockets of Industrial
                            Prison Complex. To date as much as $1 Trillion in public tax payer funds have been
                            transferred.
                        </P1>
                        <P1>
                            Joe Biden's, Crime Bill targeted <b>black males</b> because they are easy targets, easy money for Industrial Prison Complex, who in turn pay Joe Biden.
                        </P1>
                        <P1>
                            <img src={BlackMenSavedImage} alt="Black men lockedup by Joe Biden's Crime Bill and VAWA"/>
                        </P1>
                    </div>
                </Space>
            </Container>
        </KidsVideosWrap>
    );
};

export default KidsVideos;
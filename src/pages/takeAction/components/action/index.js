import React from 'react';
import TakeActionWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import TakeActionItem from "./item";
import Image1 from '../../../../assets/img/cynthialie.png'
import Image2 from '../../../../assets/img/bjfadem.jpg'
import Image3 from '../../../../assets/img/nathalie.jpg'
import Image4 from '../../../../assets/img/katrinaohde.png'
import Image5 from '../../../../assets/img/joeperez.jpg'
import Image6 from '../../../../assets/img/kevin.jpg'
import Image7 from '../../../../assets/img/shalinivenktash.png'
import TakeActionForm from "./form";

const data = [
    {
        img: Image1,
        name: 'Cynthia Lie',
        fullName: 'Cynthia Lie',
        license: '177986',
        content: <p>Abuse of discrestion, collusion, racism, feminist, anti Trump, anti men.</p>
    },
    {
        img: Image2,
        name: 'BJ Fadem',
        fullName: 'Brenda Joy (BJ) Fadem',
        license: '118819',
        content: (
            <p>
                BJ's mother wanted a boy so BJ had many sex surgeries to be a man. BJ despises men,
                kids and has spent his life destroying them.
            </p>
        )
    },
    {
        img: Image3,
        name: 'Nathalie Da Costa Ferro',
        fullName: 'Nathalie Lezama Ferro',
        license: '268398',
        content: (
            <p>
                Extortion, false billing, malicious prosecution, siphoning, defraudin the court.
                An extortionist that profits by trolling family courts. Goes by&nbsp;
                <a target='_blank' href='https://portal.scscourt.org/search/party?firstName=N*&lastName=Lezama%20ferro'>numerous
                    names
                </a>
                &nbsp;to hide her fraudulent schemes.
            </p>
        )
    },
    {
        img: Image4,
        name: 'Katrina Ohde',
        fullName: 'Katrina Ohde',
        license: '',
        content: (
            <p>
                A corrupt district attorney in San Jose, Santa Clara County, California that has betrayed the public
                trust. Must be&nbsp;
                <a href='https://apps.calbar.ca.gov/attorney/Licensee/Detail/254049' target='_blank'>
                    disbarred
                </a>.
            </p>
        )
    },
    {
        img: Image5,
        name: 'Joe Perez',
        fullName: 'Joe Perez',
        license: '',
        content: (
            <p>
                A dirty cop on the take. Currently being sued for falslifying evidence that sent an&nbsp;
                <a href='https://www.mercurynews.com/2020/06/29/san-jose-man-exonerated-after-17-years-behind-bars-sues-for-wrongful-conviction/' target='_blank'>innocent man to prison for 17 years</a>.
            </p>
        )
    },
    {
        img: Image6,
        name: 'Kevin Boileau',
        fullName: 'Kevin Boileau',
        license: '131837',
        content: (
            <p>
                Disbarred in Washington but licensed in California as an expert in women for raping and extorting
                money from women.
            </p>
        )
    },
    {
        img: Image7,
        name: 'Shalini Venktash',
        fullName: 'Shalini Venktash',
        license: '84805',
        lmft: true,
        content: (
            <p>
                Writes false court orders for corrupts lawyers to seperate kids and parents to extract every penny
                from parents to see their kids.
            </p>
        )
    }
]

const TakeActionContent = () => {
    return (
        <TakeActionWrap>
            <Container>
                <Row
                    gutter={[40, 52]}
                >
                    <Col lg={{span: 14}} span={24}>
                        <Space
                            direction='vertical'
                            size={42}
                        >
                            {
                                data.map((person, index) => (
                                    <TakeActionItem key={index} person={person}/>
                                ))
                            }
                        </Space>
                    </Col>
                    <Col lg={{span: 10}} span={24}>
                        <TakeActionForm/>
                    </Col>
                </Row>
            </Container>
        </TakeActionWrap>
    );
};

export default TakeActionContent;
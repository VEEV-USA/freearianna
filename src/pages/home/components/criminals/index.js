import React from 'react';
import HomeCriminalsWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Card, Col, Row, Space} from "antd";
import Image1 from '../../../../assets/img/gk.png'
import Image2 from '../../../../assets/img/reshmakumar.png'
import Image3 from '../../../../assets/img/vk.png'
import Image4 from '../../../../assets/img/cynthialie.png'
import Image5 from '../../../../assets/img/bjfadem.jpg'
import Image6 from '../../../../assets/img/nathalie.jpg'
import Image7 from '../../../../assets/img/katrinaohde.png'
import Image8 from '../../../../assets/img/joeperez.jpg'
import Image9 from '../../../../assets/img/kevin.jpg'
import Image10 from '../../../../assets/img/shalinivenktash.png'

const criminals = [
    {
        img: Image1,
        name: 'Ganraj Kumar',
        action: "Pedophile and Arianna's abuser. Claims to be a victim and hiding using domestic violence protection."
    },
    {
        img: Image2,
        name: 'Reshma Kumar',
        action: "Arianna's mother falsely claiming domestic violence to keep Ganraj Kumar out of jail to keep her inheritence."
    },
    {
        img: Image3,
        name: 'Vikaash Kumar',
        action: "Poisoned Arianna's dad Daya Baran so he would die and would not be able to testify against Ganraj Kumar."
    },
    {
        img: Image4,
        name: 'Cynthia Lie',
        action: "Corrupt judge colluded with pedophile's attorney & DA to cover up sexual abuse of Arianna for personal gain."
    },
    {
        img: Image5,
        name: 'BJ Fadem',
        action: "BJ's mother wanted a boy so BJ had many sex surgeries to be a man. BJ despises men, kids and has spent his life destroying them."
    },
    {
        img: Image6,
        name: 'Nathalie Ferro',
        action: "An extortionist that profits by trolling family courts. Goes by numerous names to hide her fraudulent schemes."
    },
    {
        img: Image7,
        name: 'Katrina Ohde',
        action: "A corrupt district attorney in San Jose, Santa Clara County, California that has betrayed the public trust. Must be disbarred."
    },
    {
        img: Image8,
        name: 'Joe Perez',
        action: "A dirty cop on the take. Currently being sued for falslifying evidence that sent an innocent man to prison for 17 years."
    },
    {
        img: Image9,
        name: 'Kevin Boileau',
        action: "Disbarred in Washington but licensed in California as an expert in women for raping and extorting money from women."
    },
    {
        img: Image10,
        name: 'Shalini Venktash',
        action: "Writes false court orders for corrupts lawyers to seperate kids and parents to extract every penny from parents to see their kids."
    }
]

const HomeCriminals = () => {
    return (
        <HomeCriminalsWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                >
                    <SectionTitle>
                        Criminals Covering Up Sexual Abuse of Arianna
                    </SectionTitle>
                    <Row
                        gutter={[32, 32]}
                        justify='center'
                    >
                        {
                            criminals.map((criminal, key) => (
                                <Col xl={{span: 5}} md={{span: 8}} sm={{span: 12}} span={24} key={key} >
                                    <Card className='criminal-card' bordered={false}>
                                        <img src={criminal.img} alt={criminal.name}/>
                                        <h3>
                                            {criminal.name}
                                        </h3>
                                        <p>
                                            {criminal.action}
                                        </p>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Space>
            </Container>

        </HomeCriminalsWrap>
    );
};

export default HomeCriminals;
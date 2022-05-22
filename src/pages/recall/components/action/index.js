import React, {Fragment} from 'react';
import TakeActionWrap from "./style/wrap";
import Wrap, {Wrap1} from "./style/wrap";
import {Avatar, Card, Col, Row} from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import Container from "../../../../components/paper/container";
//import {Col, Row, Space} from "antd";
import TakeActionItem from "./item";
import Image1 from '../../../../assets/img/cynthialie.png'
// import Image2 from '../../../../assets/img/bjfadem.jpg'
// import Image3 from '../../../../assets/img/nathalie.jpg'
// import Image4 from '../../../../assets/img/katrinaohde.png'
// import Image5 from '../../../../assets/img/joeperez.jpg'
// import Image6 from '../../../../assets/img/kevin.jpg'
// import Image7 from '../../../../assets/img/shalinivenktash.png'
import TakeActionForm from "./form";
import CardTitle from "../../../../components/heading/card";


const data = [
    {
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/bjfadem1.pdf`,
        title: 'Rape Charges',
        items: [
            'Rape charges',
        ]
    }, {
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/nathalieferro2.pdf`,
        title: 'Extortion Charges',
        items: [
            'test',
        ]
    }, {
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/nathalieferro1.pdf`,
        title: 'Bribery Charges',
        items: [
            'test',
        ]
    }, {
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/reshmakumar-fraud.pdf`,
        title: 'Sexual Abuse',
        items: [
            'test',
        ]
    }


// const data = [
//     {
//         img: Image1,
//         name: 'Cynthia Lie',
//         fullName: 'Cynthia Lie',
//         license: '177986',
//         content: <p>Abuse of discrestion, collusion, racism, feminist, anti Trump, anti men.</p>
//     },
    // {
    //     img: Image2,
    //     name: 'BJ Fadem',
    //     fullName: 'Brenda Joy (BJ) Fadem',
    //     license: '118819',
    //     content: (
    //         <p>
    //             BJ's mother wanted a boy so BJ had many sex surgeries to be a man. BJ despises men,
    //             kids and has spent his life destroying them.
    //         </p>
    //     )
    // },
    // {
    //     img: Image3,
    //     name: 'Nathalie Da Costa Ferro',
    //     fullName: 'Nathalie Lezama Ferro',
    //     license: '268398',
    //     content: (
    //         <p>
    //             Extortion, false billing, malicious prosecution, siphoning, defraudin the court.
    //             An extortionist that profits by trolling family courts. Goes by&nbsp;
    //             <a target='_blank' href='https://portal.scscourt.org/search/party?firstName=N*&lastName=Lezama%20ferro'>numerous
    //                 names
    //             </a>
    //             &nbsp;to hide her fraudulent schemes.
    //         </p>
    //     )
    // },
    // {
    //     img: Image4,
    //     name: 'Katrina Ohde',
    //     fullName: 'Katrina Ohde',
    //     license: '',
    //     content: (
    //         <p>
    //             A corrupt district attorney in San Jose, Santa Clara County, California that has betrayed the public
    //             trust. Must be&nbsp;
    //             <a href='https://apps.calbar.ca.gov/attorney/Licensee/Detail/254049' target='_blank'>
    //                 disbarred
    //             </a>.
    //         </p>
    //     )
    // },
    // {
    //     img: Image5,
    //     name: 'Joe Perez',
    //     fullName: 'Joe Perez',
    //     license: '',
    //     content: (
    //         <p>
    //             A dirty cop on the take. Currently being sued for falslifying evidence that sent an&nbsp;
    //             <a href='https://www.mercurynews.com/2020/06/29/san-jose-man-exonerated-after-17-years-behind-bars-sues-for-wrongful-conviction/' target='_blank'>innocent man to prison for 17 years</a>.
    //         </p>
    //     )
    // },
    // {
    //     img: Image6,
    //     name: 'Kevin Boileau',
    //     fullName: 'Kevin Boileau',
    //     license: '131837',
    //     content: (
    //         <p>
    //             Disbarred in Washington but licensed in California as an expert in women for raping and extorting
    //             money from women.
    //         </p>
    //     )
    // },
    // {
    //     img: Image7,
    //     name: 'Shalini Venktash',
    //     fullName: 'Shalini Venktash',
    //     license: '84805',
    //     lmft: true,
    //     content: (
    //         <p>
    //             Writes false court orders for corrupts lawyers to seperate kids and parents to extract every penny
    //             from parents to see their kids.
    //         </p>
    //     )
    // }
]

const TakeActionContent = () => {
//     return (
//         <TakeActionWrap>
//             <Container>
//                 <Row
//                     gutter={[40, 52]}
//                 >
//                     <Col lg={{span: 17}} span={24}>
                        
//                     </Col>
//                     <Col lg={{span: 7}} span={24}>
//                         <TakeActionForm/>
//                     </Col>
//                 </Row>
//             </Container>
//         </TakeActionWrap>
//     );
// };

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
                        <Avatar src={Image1} size={200}/>
                        <div>
                            <h3>
                                Cynthia Lie - Vicious Career Criminal
                            </h3>
                            <P1>
                                Cynthia Lie, is in serious and egregious civil rights and color of law violations. Lie
                                was promoted to judge of the California 6th District Court of Appeal in July 9, 2021.
                                Previously, Lie was a judge at the Superior Court of Santa Clara County in California.
                                Lie, has consistently used her position and abused her power and the power of the courts
                                for personal, financial and political gain to the detriment of the public. Lie colluded
                                with corrupt unscrupulous lawyers, district attorneys and used the law to cover up child
                                sex abuse and to protect a pedophile for personal, financial and political benefit. Lie
                                allowed BJ Fadem, Nathalie Ferro and Scott Reno to abuse the courts, use it as a vehicle
                                to file false charges and drain their clients. Abuse of discrestion, collusion, racism, feminist, anti Trump, anti men.
                            </P1>
                        </div>
                    </Media>
                    <P1>
                        On June 13, 2015, I witnessed Ganraj Kumar sexually molest my daughter Arianna, who was 1.5
                        years, while she was sleeping. Her mother Reshma Kumar did not want me reporting her father to
                        authorities in order not to be cut out of her inheritance. On June 16, 2015, Reshma Kumar forced
                        me to buy an insurance policy. At the time I did not know that Reshma Kumar and her family were
                        plotting to eliminate me so that there would be no witness and they had been consulting with
                        lawyers. When I decided to report Ganraj Kumar, Reshma Kumar filed for divorce and falsely
                        alleged domestic violence. Cynthia Lie issued a lifetime restraining order against me based on
                        no evidence. She made the decision in 2 minutes. Lie violated my rights, I was denied due
                        process and Lie went to my facebook page and used my support for President Trump and my religion
                        to target me due to her hatred for men, President Trump and Christians. Due to the false
                        domestic violence restraining order I became homeless. While at the same time Lie allowed
                        lawyers to drain as much as $50,000 a month in fees. Since 2015, I have seen my daughter for
                        just 40 hours in 7 years. I had to fight tooth and nail to get every hour and expense every
                        penny and go hungry for days. BJ Fadem, Nathalie Ferro and Scott Reno filed 358 bogus court
                        actions, with false unsubstantiated allegations over 4 years and used it to extort and siphon
                        $700,000. Lie allowed the court to be used to commit perjury, and operate a false billing
                        extortion scheme that Lie benefited politically and professionally by allowing corrupt lawyers
                        to siphoned money from families.
                    </P1>
                    <P1>
                        Lie is using the courts to get revenge against men, against fathers', against kids, against
                        families because of spiteful hatred her empty LGBTQ life has dealtt her. Lie, has to be removed,
                        charged and prosecuted. All Lie's cases have to be vacated. They are all fraudulent, pay for
                        play, kids for cash, illegal child trafficking schemes. Where kids are used by lawyers using
                        falsely obtained orders from corrupt frauds like Cynthia Lie. Lie has violated the oath of
                        office, abuse of power, abuse the power of the courts, lacks moral character and is a threat to
                        public safety.<br/>
                        I would like the US DoJ to:<br/>
                        1) immediately begin an investigation into the organized rackeetering happening in the
                        California Family Courts.<br/>
                        2) invesitgate Cynthia Lie, BJ Fadem, Nathalie Ferro Scott Reno, Kevin Boileau, Joe Perez,
                        Katrina Ohde, Reshma Kumar for false prosectution, coverup sexual abuse of a minor using
                        domestic violence laws intented to protect real victims not shield pedophiles and profit from
                        it, cover up
                        attempted murder, false billing, child trafficking using the courts.
                    </P1>
                    </Col>
                    <Col lg={{span: 7}} span={24}>
                        <TakeActionForm/>
                    </Col>
                    </Row>
                </Container>
            </Wrap1>
            <Container style={{marginTop: 21}}>
                <Row
                    gutter={[40, 40]}
                >
                    {
                        data.map((dat, key) => (
                            <Col lg={6} md={12} sm={12} span={24} key={key}>
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={dat.pdf}
                                        >
                                            <embed src={dat.cover} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
                                        </a>
                                    }
                                    bordered={false}
                                    className='pdf-card'
                                >
                                    <CardTitle>
                                        <a
                                            rel="noreferrer"
                                            href={dat.pdf}
                                            target='_blank'
                                        >
                                            {dat.title}
                                        </a>
                                    </CardTitle>
                                    {
                                        dat.items.map((item, index) => (
                                            <p key={`index${index}`}>
                                                {item}
                                            </p>
                                        ))
                                    }
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Fragment>
    );
};

export default TakeActionContent;
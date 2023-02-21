import { Col, Row } from 'antd';
import { React } from 'react';
import Img from '../../assets/imgs/heroImg.png';

function Home() {
    console.log(Img);
    return (
        <div className="home">
            <Row className="home-intro">
                <Col span={12} className="home-intro-content">
                    <p>Hi !</p>
                    <p style={{ fontWeight: 'bold', fontSize: '50px', margin: '0' }}>I&apos;m .... a Front-End Developer</p>
                    <p>Front-End devel oper based in Bekasi, Indonesian I&apos;am coding with a clean and beautiful problem solving in mind.</p>
                </Col>
                <Col span={12}>
                    <img src={Img} style={{ width: '500px', height: '467px' }}></img>
                </Col>
            </Row>
            <Row className="home-list">
                <Col span={8}>
                    <div className="home-list-child"></div>
                </Col>
                <Col span={8}>
                    <div className="home-list-child"></div>
                </Col>
                <Col span={8}>
                    <div className="home-list-child"></div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;

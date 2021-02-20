import React from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import './TabSort.css';

const TabSort = (state) => {

    return (
        <div className="wrapper">
            <h3 className="tabAbout">Категории работ</h3>
            <Tab.Container id="left-tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <CustomNavLink eventKey="iconastasy">Иконостасы от 2000р</CustomNavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <CustomNavLink eventKey="rastStul">Растущие стульчики от 2800р</CustomNavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <CustomNavLink eventKey="gamesHandMade">Вязанные игрушки от 1000р</CustomNavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <CustomNavLink eventKey="metrics_toppers_names_medal">
                                    Метрики топперы имена медальницы от 500р</CustomNavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <CustomNavLink eventKey="photo">Фото рамки от 1500р</CustomNavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <CustomNavLink eventKey="table">Подносы от 1500р</CustomNavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <CustomNavLink eventKey="decor">Декор от 2000р</CustomNavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <CustomNavLink eventKey="tbGames">Настольные игры от 3000р</CustomNavLink>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="iconastasy">
                                <div className='tableImg'>
                                    <img src={state.imagesIcons[0]} alt="img"/>
                                    <img src={state.imagesIcons[1]} alt="img"/>
                                    <img src={state.imagesIcons[2]} alt="img"/>
                                    <img src={state.imagesIcons[3]} alt="img"/>
                                    <img src={state.imagesIcons[4]} alt="img"/>
                                    <img src={state.imagesIcons[5]} alt="img"/>
                                    <img src={state.imagesIcons[6]} alt="img"/>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="rastStul">
                                <div className='tableImg'>
                                    <img src={state.imagesRastSt[0]} alt="imgSt"/>
                                    <img src={state.imagesRastSt[1]} alt="imgSt"/>
                                    <img src={state.imagesRastSt[2]} alt="imgSt"/>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="gamesHandMade">
                                <div className='tableImg'>
                                    <img src={state.imagesHandMade[9]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[10]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[11]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[3]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[4]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[5]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[6]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[7]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[8]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[0]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[1]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[2]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[12]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[13]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[14]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[15]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[16]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[17]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[18]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[19]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[20]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[21]} alt="imgHand"/>
                                    <img src={state.imagesHandMade[22]} alt="imgHand"/>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="metrics_toppers_names_medal">
                                <div className='tableImg'>
                                    <img src={state.metrics_etc[0]} alt="imgNames"/>
                                    <img src={state.metrics_etc[1]} alt="imgNames"/>
                                    <img src={state.metrics_etc[2]} alt="imgNames"/>
                                    <img src={state.metrics_etc[3]} alt="imgNames"/>
                                    <img src={state.metrics_etc[4]} alt="imgNames"/>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="photo">
                                <div className='tableImg'>
                                    <img src={state.photo[0]} alt="imgPhoto"/>
                                    <img src={state.photo[1]} alt="imgPhoto"/>
                                    <img src={state.photo[2]} alt="imgPhoto"/>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="table">
                                <div className='tableImg'>
                                    <img src={state.table[0]} alt="imgTable"/>
                                    <img src={state.table[1]} alt="imgTable"/>
                                    <img src={state.table[2]} alt="imgTable"/>
                                    <img src={state.table[3]} alt="imgTable"/>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="decor">
                                <div className='tableImg'>
                                    <img src={state.decor[0]} alt="imgTable"/>
                                    <img src={state.decor[1]} alt="imgTable"/>
                                    <img src={state.decor[2]} alt="imgTable"/>
                                    <img src={state.decor[3]} alt="imgTable"/>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tbGames">
                                <div className='tableImg'>
                                    <img src={state.tbGames[0]} alt="imgTable"/>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
};

const CustomNavLink = styled(Nav.Link)
    `margin-top: 20px;
     margin-right: 20px;
     color: white;
     &:hover {
        background-color: #603415;
        color: white;
     }
     &:link {
        background-color: #603415;
        color: white;
     }
     `

export default TabSort;
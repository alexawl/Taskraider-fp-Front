import React, { Component } from 'react';
import { Wrapper, Title, Subtitle } from '../styles';
import GetJobButton from '../components/getJobsButton';
import 'bootstrap-css-only/css/bootstrap.css'
import backgroundImg from '../images/sky2.png'
import styled from 'styled-components'


const Background = styled.div`
background-image: url(${backgroundImg});
background-size: cover;
background-repeat: no-repeat;
background-position: left top;
height:100%;
`;
const BackgroundOverlay = styled.div`
background-color: rgb(255, 255, 255, 0.09);
height: 100%
`;

const TitleWrapper = styled.div`
    margin-top:20em;
    text-shadow: 3px 4px 0 rgb(15, 14, 14);
    font-family: 'Baloo Bhai', cursive;
    color: #2b665e;
    font-size: 80px;
`;
class Home extends Component {
    state = {}


    render() {

        return (
            <Background>
                <BackgroundOverlay>
                    <Wrapper>
                        <div>
                            <TitleWrapper>
                                <Title>
                                    Taskraiders Job Search 2.0
                            </Title>
                            </TitleWrapper>
                            <Subtitle>
                                FIND YOUR DREAM JOB
                            </Subtitle>
                            <GetJobButton background="#ffffff00"/>

                        </div>
                    </Wrapper>
                </BackgroundOverlay>
            </Background >
        )
    }

}

export default Home

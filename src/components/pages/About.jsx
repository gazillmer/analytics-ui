import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <AboutContainer>
            <AboutCard>
                <Title>
                    About
                    <hr />
                </Title>
                <Text>
                    One of the main challenges of an airport administrator is managing the number of flights required to transport a certain number of passengers, especially during the Covid-19 pandemic, where air traffic was dramatically reduced. This work aims to create a social network and web traffic sensing model to predict peoples willingness to travel in the months to come, providing support for decision-making managers of airports. The model will rely on data provided by ANAC (Brazilian National Civil Aviation Agency), as well as information collected from travel-related search engines and social-network sensing.

                    This project is part of Gabriel's undergraduate thesis for his bachelor's degree in Computer Engineering at UFRGS.
                    <br />
                    <br />

                    Student: Gabriel Alexandre Zillmer
                    <br />
                    Advisor: <a href="http://www.inf.ufrgs.br/~comba/">João Luiz Dihl Comba</a>
                </Text>
            </AboutCard>
        </AboutContainer>
    )
}

const AboutContainer = styled.div`
    width: calc(100% - 275px); 
    background-color: #fafafa;   
`
const AboutCard = styled.div`
    padding: 50px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.5);
    border-radius: 10px;
    background-color: white;  
`
const Title = styled.div`
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 700;
    background-color: white; 
`
const Text = styled.div`
    text-align: justify;
    font-size:  16px;
    line-height: 26px;   
    background-color: white;
`

export default About

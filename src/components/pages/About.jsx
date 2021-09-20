import React from 'react'
import './about.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                <div className="title">
                    <h3 className="titleText">About</h3>
                    <hr />
                </div>
                <div className="textInfo">
                    One of the main challenges of an airport administrator is managing the number of flights required to transport a certain number of passengers, especially during the Covid-19 pandemic, where air traffic was dramatically reduced. This work aims to create a social network and web traffic sensing model to predict peoples willingness to travel in the months to come, providing support for decision-making managers of airports. The model will rely on data provided by ANAC (Brazilian National Civil Aviation Agency), as well as information collected from travel-related search engines and social-network sensing.

                    This project is part of Gabriel's undergraduate thesis for his bachelor's degree in Computer Engineering at UFRGS.
                    <br />
                    <br />

                    Student: Gabriel Alexandre Zillmer
                    <br />
                    Advisor: <a href="http://www.inf.ufrgs.br/~comba/">João Luiz Dihl Comba</a>
                </div>
            </div>
        </div>
    )
}

export default About

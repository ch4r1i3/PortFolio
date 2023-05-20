import React, { useState } from 'react'
import "./services.css";

const Services = () => {
        const [toggleState, setToggleState] = useState(0);

        const toggleTab = (index) => {
            setToggleState(index);
        }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What do I offer?</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            FullStack Developer <br /> FrontEnd 
                        </h3>
                    </div>
                
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">
                                FrontEnd
                            </h3>
                            <p className="services__modal-description">Front-end refers to the part of a website 
                            or application that users can see and interact with. My goal is to provide the best
                            service implementing and maintaining this part of the application to every client and company.</p>

                            <ul className="services__modal-services-grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design, Structure, and Develope web applications and websites from scratch.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Troubleshooting and bug fixing of web applications.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Development of APIs and integration with third-party services.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            FullStack Developer <br /> BackEnd
                        </h3>
                    </div>
                
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More{""} 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">BackEnd</h3>
                            <p className="services__modal-description">Backend refers to the server-side of a web 
                            application, where the logic and data storage of the application reside. It is responsible 
                            for processing data and communicating with the FrontEnd.
                            </p>

                            <ul className="services__modal-services-grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Implementation of security features 
                                    to protect web applications and user data</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and implementation of 
                                    scalable and efficient databases</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Deployment and maintenance of web 
                                    applications on servers and cloud platforms.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
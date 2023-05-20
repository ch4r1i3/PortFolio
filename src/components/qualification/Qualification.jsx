import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey</span>
        
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className= {toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick= {() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>

                <div className= {toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                onClick= {() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className= {toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content qualification__content-active"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">A/S Associate</h3>
                            <span className="qualification__subtitle">Valencia College</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2020 - 2022
                            </div>
                        </div>
                    
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">General Manager</h3>
                            <span className="qualification__subtitle">MRF Trucking</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>03/04/19 - 07/15/22
                            </div>
                        </div>
                    
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">University of Central Florida</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2023
                            </div>
                        </div>
                    
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Operations Manager</h3>
                            <span className="qualification__subtitle">Tuscan Sun Enterprises</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>08/01/2022 - Present
                            </div>
                        </div>
                    
                        
                    </div>

                </div>
            </div>
        </div>
        </section>
    )
}

export default Qualification
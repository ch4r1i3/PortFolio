import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Carlos</h1>

                <ul className="footer__list">
                    <li>
                        <a href= "#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href= "#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href= "#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href='https://instagram.com/sono_carli' className='footer__social-link' target="_blank" rel="noreferrer">
                        <i class="uil uil-instagram"></i> 
                    </a>
                    <a href='https://twitter.com/c4r1iCodes' className='footer__social-link' target="_blank" rel="noreferrer">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                    <a href='https://github.com/ch4r1i3' className='footer__social-link' target="_blank" rel="noreferrer">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Carlos Martinez. All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer

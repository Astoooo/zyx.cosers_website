import { Parallax } from 'react-parallax';
import pOne from '../img/PhotoshootOne.jpg'

const LandingPageImage3 = () => (
    <Parallax className='LandingPageImage' bgImage={pOne} strength={200}>
        <div className='aboutcontent'>
            <h1 className='about-content'>About</h1>
            <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className='footer'>
            <h1 className='footer-content'>Contact me!</h1>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </Parallax>
);

export default LandingPageImage3
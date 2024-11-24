import { Parallax } from 'react-parallax';
import StarbucksShoot from '../img/StarbucksShoot.jpg';

const LandingPageImage = () => (
  <Parallax className="LandingPageImage" bgImage={StarbucksShoot} strength={200}>
    <div className="navbar">
      <nav>
        <ul>
          <li><a href="#photoshoots">Photoshoots</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    
    <div className="content">
      <span className="img-txt">zyx.coser</span>
    </div>
  </Parallax>
);

export default LandingPageImage;

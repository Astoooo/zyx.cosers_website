import { Parallax } from 'react-parallax';
import marble from '../img/marble.jpeg'
import StandardImageList from './ImageList';

const LandingPageImage2 = () => {
    return (
        <Parallax className='LandingPageImage' strength={200}>
            <div className='PSContent'>
                <h1 className='content-txt'>Photoshoot</h1>
                <div className='imagelist'>
                    <StandardImageList />
                </div>
            </div>
        </Parallax>
    );
};

export default LandingPageImage2
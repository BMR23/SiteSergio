import { Menu } from '@components/Menu';
import { ImageGallerySlider } from '@components/ImageGallerySlider';
import './styles.css';
import foto1 from './img/foto1.jpg';
import foto2 from './img/foto2.png';
import foto3 from './img/foto3.jpg';
// import foto4 from './img/foto4.jpg'
// import foto5 from './img/foto5.jpg'
import foto6 from './img/foto6.jpg';

export const Home = () => {
    const images = [foto1, foto2, foto3, foto6]
    return (
        <div className='container-all'>
        {/* <Menu /> */}
        <ImageGallerySlider images={images}/>
        
        <h2>Ônibus luxo</h2>
        <h2>Vans luxo</h2>
        <h2>Carros luxo</h2>
        <h2>Helicópteros luxo</h2>
        <h2>Jatos super luxo</h2>


        </div>
    )
}
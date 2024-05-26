import P from 'prop-types';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export const ImageGallerySlider = ({ images }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      >

      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt="imagem" className='imgSwiper'/>
        </SwiperSlide>
      ))}
    </Swiper>
    )
};

ImageGallerySlider.propTypes = {
    images: P.array
}
import P from 'prop-types';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export const ImageSlider = ({ images, autoplay=false,  }) => {
  return (
    <>
    {autoplay && (
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
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
    )}

    {!autoplay && (
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      >

      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt="imagem" className='imgSwiper'/>
        </SwiperSlide>
      ))}
    </Swiper>
    )}
    </>
  )
};

ImageSlider.propTypes = {
    images: P.array.isRequired,
    autoplay: P.bool
}
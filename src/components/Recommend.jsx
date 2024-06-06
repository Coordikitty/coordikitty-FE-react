import { Box, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Recommend.css'

import TempImg from '../assets/temp.jpg' 

const Recommend = () => {
  return (
    <Box sx={{ position: 'absolute', left: '0', width: '100vw', height: '40rem'}}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {[1,2,3,4,5].map((id) => {
          return <SwiperSlide key={id} >
            <img src={TempImg} alt="slide_image"/>
          </SwiperSlide>
        })}
        

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>
    </Box>
  );
};


const ClothCard = () => {
  return <Box 
    width={'26rem'} height={'26rem'} 
    sx={{backgroundColor: 'gray'}}
  >
    <img src={TempImg} alt="slide_image" 
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  </Box>
}


export default Recommend
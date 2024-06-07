import { Box, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Swiper.css'

import RecTemp1 from '../assets/RecTemp1.png' 
import RecTemp2 from '../assets/RecTemp2.png' 

const Recommend = () => {
  return (
    <Box sx={{ position: 'absolute', left: '0', width: '100vw', height: '40rem'}}>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          el: '.swiper-pagination',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {/* {[1,2,3,4,5].map((id) => {
          return <SwiperSlide key={id} >
            <img src={TempImg} alt="slide_image"/>
          </SwiperSlide>
        })} */}

        <SwiperSlide>
          <img src={RecTemp1} alt={RecTemp1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={RecTemp2} alt={RecTemp2}></img>
        </SwiperSlide>

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
    <img src={RecTemp1} alt="slide_image" 
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  </Box>
}


export default Recommend
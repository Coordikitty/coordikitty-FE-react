import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Swiper.css'

import RecTemp1 from '../assets/RecTemp1.png'
import RecTemp2 from '../assets/RecTemp2.png'

const Recommend = ({ rcdClothes }) => {
  return (
    <React.Fragment>
      {rcdClothes.length !== 0 ? (<Box sx={{ position: 'absolute', left: '0', width: '100vw', height: '40rem' }}>
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
          {rcdClothes.map((clothes) => {
            return <SwiperSlide key={clothes}>
              <img src={clothes} alt={clothes}></img>
            </SwiperSlide>
          })}

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>

        </Swiper>
      </Box>) : (<Box width={'100%'} padding={'15rem 0'} textAlign={'center'}>
        <Typography variant='h1'>
          추천 유형을 선택해 주세요!!!
        </Typography>
      </Box>)}

    </React.Fragment>
  );
};


const ClothCard = () => {
  return <Box
    width={'26rem'} height={'26rem'}
    sx={{ backgroundColor: 'gray' }}
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
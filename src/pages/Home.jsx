import React, { useEffect, useState } from 'react'
import { 
  Box,
  Stack,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Typography,
  Button
} from '@mui/material'
import { useSelector } from 'react-redux'
import tempImg from "../assets/temp.jpg"
import styleInfo from '../utils/styleInfo'
import ClosetModal from '../components/Closet/ClosetModal'
import RequiredSignin from '../components/RequiredSignin'


const SITUATION = 'situation'
const STYLE = 'style'
const SEASON = 'season'

const Home = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [lv1, SetLv1] = useState(STYLE)
  const [lv2, SetLv2] = useState('')
  const accessToken = useSelector(state => state.user.accessToken)
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleLv1 = e => {
    SetLv2('')
    SetLv1(e.target.value)
  } 
  const handleLv2 = e => SetLv2(e.target.value) 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // Success
      async(position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        console.log('lat', lat)
        console.log('lon', lon)
      },
      // Fail
      async(error) => {
        const lat = 37.541
        const lon = 126.986
        console.log('lat', lat)
        console.log('lon', lon)
      },
    )
  }, [])

  return (
    <React.Fragment>
      {accessToken ? <Box marginTop={'2rem'}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant='h1'>오늘의 추천</Typography>
          <Button 
            variant='contained' 
            disableElevation 
            sx={{width: "20%"}}
            onClick={handleModalOpen}
          >
            옷장 열기
          </Button>
          <ClosetModal modalOpen={modalOpen} handleModalClose={handleModalClose}></ClosetModal>
        </Stack>
        <Stack direction={'row'} spacing={2} marginTop={'2rem'}>
          <FormControl fullWidth>
            <InputLabel id="recomned-lv1-select-label">추천 유형</InputLabel>
            <Select
              id="recomned-lv1-select" labelId="recomned-lv1-select-label"
              label="추천 유형"
              value={lv1}
              onChange={handleLv1}
            >
              <MenuItem value={SITUATION}>상황</MenuItem>
              <MenuItem value={STYLE}>스타일</MenuItem>
              <MenuItem value={SEASON}>계절</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="recomned-lv2-select-label">세부 추천 유형</InputLabel>
            <Select
              id="recomned-lv2-select" labelId="recomned-lv2-select-label"
              label="세부 추천 유형"
              value={lv2}
              onChange={handleLv2}
              disabled={!lv1}
            >
              {(lv1 === STYLE) && styleInfo.map((el) => {
                return <MenuItem key={el.style} value={el.style}>{el.kr}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Stack>
        <Stack direction={'row'} sx={{overflowX: 'scroll'}} marginTop={'2rem'} spacing={2} >
          <RecomandClothesCard></RecomandClothesCard>
          <RecomandClothesCard></RecomandClothesCard>
          <RecomandClothesCard></RecomandClothesCard>
          <RecomandClothesCard></RecomandClothesCard>
          <RecomandClothesCard></RecomandClothesCard>
        </Stack>
      </Box> : <RequiredSignin></RequiredSignin>}
    </React.Fragment>
  )
}

const RecomandClothesCard = () => {
  return (
    <Box>
      <Typography variant='h3' marginBottom={'1rem'}>Hello</Typography>
      <Box sx={{
        width: '26rem',
        height: '26rem',
        backgroundImage: `url(${tempImg})`,
        backgroundSize: 'cover'
      }}></Box>
    </Box>
  )
}


export default Home
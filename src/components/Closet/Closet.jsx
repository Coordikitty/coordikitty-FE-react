import React, { useState } from 'react'
import { 
  Box,
  Stack,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button
} from '@mui/material'
import ClothesAppendModal from './ClothesAppendModal'
import clothesInfo from '../../utils/clothesInfo'
import tempImg from '../../assets/temp.jpg'

const Closet = () => {

  const [type, setType] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleType = e => setType(e.target.value)

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Box 
      width={'100%'} 
      padding={"4rem 2rem"} 
      sx={{backgroundColor: 'white', borderRadius: '0.75rem'}}
    >
      <Stack direction={'row'} spacing={2}>
        <FormControl fullWidth>
          <InputLabel id="closet-type-select-label">옷 유형</InputLabel>
          <Select
            id="closet-type-select" labelId="closet-type-select-label"
            label="옷 유형"
            value={type}
            onChange={handleType}
          >
            {Object.keys(clothesInfo).map(el => {
              return <MenuItem key={el} value={el}>{clothesInfo[el]['kr']}</MenuItem>
            })}
          </Select>
        </FormControl>
        <Button 
          variant='contained' 
          disableElevation 
          sx={{width: "20%"}}
          onClick={handleModalOpen}
        >
          옷 추가
        </Button>
        <ClothesAppendModal modalOpen={modalOpen} handleModalClose={handleModalClose}></ClothesAppendModal>
      </Stack>
      <Stack direction={'row'} sx={{overflowX: 'scroll'}} marginTop={'2rem'} spacing={2} >
        <ClothesCard></ClothesCard>
        <ClothesCard></ClothesCard>
        <ClothesCard></ClothesCard>
        <ClothesCard></ClothesCard>
        <ClothesCard></ClothesCard>
      </Stack>
    </Box>

  )
}

const ClothesCard = () => {
  return (
    <Box>
      <Box sx={{
        width: '26rem',
        height: '26rem',
        backgroundImage: `url(${tempImg})`,
        backgroundSize: 'cover'
      }}></Box>
    </Box>
  )
}

export default Closet
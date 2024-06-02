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
import { useTheme } from '@mui/material/styles';
import ClothesAppendModal from './ClothesAppendModal'
import clothesInfo from '../../utils/clothesInfo'
import temp1 from '../../assets/post_temp/1.jpg'
import temp2 from '../../assets/post_temp/2.jpg'
import temp3 from '../../assets/post_temp/3.jpg'
import temp4 from '../../assets/post_temp/4.jpg'
import temp5 from '../../assets/post_temp/5.jpg'

const fakeData = [
  {clothId: 1, clothURL: temp1},
  {clothId: 2, clothURL: temp2},
  {clothId: 3, clothURL: temp3},
  {clothId: 4, clothURL: temp4},
  {clothId: 5, clothURL: temp5},
]

const Closet = ({selectTool}) => {

  const [type, setType] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [clothesList, setClothesList] = useState(fakeData)
  
  const handleType = e => setType(e.target.value)

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);



  return (
    <React.Fragment>
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
      <Stack direction={'row'} sx={{overflowX: 'scroll', overflowY: 'hidden'}} margin={'2rem 0'} spacing={2} >
        {clothesList.map((clothes) => {
          return <ClothesCard 
            key={clothes.clothId}
            clothesData={clothes}
            selectTool={selectTool}
          ></ClothesCard>
        })}
      </Stack>
    </React.Fragment>

  )
}

const ClothesCard = ({clothesData, selectTool}) => {

  const theme = useTheme()

  const handleSelect = () => {
    if(selectTool){
      const index = selectTool.clothIds.indexOf(clothesData.clothId);
      if (index !== -1) {
        selectTool.setClothIds(selectTool.clothIds.filter(el => el !== clothesData.clothId))
        selectTool.setClothImgs(selectTool.clothImgs.filter(el => el !== clothesData.clothURL))
      } else {
        selectTool.setClothIds([...selectTool.clothIds, clothesData.clothId])
        selectTool.setClothImgs([...selectTool.clothImgs, clothesData.clothURL])
      }
    }
  }

  return (
    <Box onClick={handleSelect}>
      <Box sx={{
          width: '20rem',
          height: '30rem',
          borderRadius: '0.75rem',
          border: (selectTool && selectTool.clothIds.indexOf(clothesData.clothId) !== -1) ? `0.5rem solid ${theme.palette.secondary.main}` : 'none',
          padding: (selectTool && selectTool.clothIds.indexOf(clothesData.clothId) !== -1) ? '0.5rem' : 0,
          transition: '0.3s',
        }}>
        <img 
          src={clothesData.clothURL} 
          alt={clothesData.clothURL}
          loading='lazy'
          style={{
            borderRadius: '0.75rem',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: '0.3s',
          }}
        />
      </Box>
    </Box>
  )
}




export default Closet
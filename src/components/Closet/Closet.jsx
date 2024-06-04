import React, { useEffect, useState } from 'react'
import { 
  Box,
  Stack,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  IconButton
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import ClothesAppendModal from './ClothesAppendModal'
import clothesInfo from '../../utils/clothesInfo'
import temp1 from '../../assets/post_temp/1.jpg'
import temp2 from '../../assets/post_temp/2.jpg'
import temp3 from '../../assets/post_temp/3.jpg'
import temp4 from '../../assets/post_temp/4.jpg'
import temp5 from '../../assets/post_temp/5.jpg'
import deleteClosetApi from '../../apis/closet/deleteClosetApi';
import getClosetApi from '../../apis/closet/getClosetApi';


const Closet = ({selectTool}) => {

  const [type, setType] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [clothesList, setClothesList] = useState([])
  
  const handleType = e => setType(e.target.value)

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleDelete = async(clothId) => {
    if(window.confirm("삭제하시겠습니까?")) {
      try {
        const res = await deleteClosetApi(clothId)
        console.log('deleteClosetApi res : ', res)
        setClothesList(clothesList.filter(el => el.clothId !== clothId))
        alert('삭제 완료')
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('삭제가 취소되었습니다')
    }
  }

  useEffect(() => {
    ;(async() => {
      try {
        const res = await getClosetApi()
        console.log('getClosetApi res : ', res)
        setClothesList(res)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [modalOpen])

  

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
            handleDelete={handleDelete}
          ></ClothesCard>
        })}
      </Stack>
    </React.Fragment>

  )
}

const ClothesCard = ({clothesData, selectTool, handleDelete}) => {

  const theme = useTheme()

  const handleSelect = () => {
    if(selectTool){
      const index = selectTool.clothIds.indexOf(clothesData.clothId);
      if (index !== -1) {
        selectTool.setClothIds(selectTool.clothIds.filter(el => el !== clothesData.clothId))
        selectTool.setClothImgs(selectTool.clothImgs.filter(el => el !== clothesData.imageUrl))
      } else {
        selectTool.setClothIds([...selectTool.clothIds, clothesData.clothId])
        selectTool.setClothImgs([...selectTool.clothImgs, clothesData.imageUrl])
      }
    }
  }


  return (
    <Box onClick={handleSelect}>
      <Box sx={{
          position: 'relative',
          width: '20rem',
          height: '30rem',
          borderRadius: '0.75rem',
          border: (selectTool && selectTool.clothIds.indexOf(clothesData.clothId) !== -1) ? `0.5rem solid ${theme.palette.secondary.main}` : 'none',
          padding: (selectTool && selectTool.clothIds.indexOf(clothesData.clothId) !== -1) ? '0.5rem' : 0,
          transition: '0.3s',
        }}>
        <img 
          src={clothesData.imageUrl} 
          alt={clothesData.imageUrl}
          loading='lazy'
          style={{
            borderRadius: '0.75rem',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: '0.3s',
          }}
        />
        <IconButton sx={{position: 'absolute', bottom: '0', right: '0'}} onClick={() => {handleDelete(clothesData.clothId)}}>
          <DeleteIcon fontSize='large'></DeleteIcon>
        </IconButton>
      </Box>
    </Box>
  )
}




export default Closet
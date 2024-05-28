import React, { useState } from 'react'
import { 
  Modal,
  Container,
  Box,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  Button
} from '@mui/material'
import clothesInfo from '../../utils/clothesInfo'

const ClothesAppendModal = ({modalOpen, handleModalClose}) => {

  const [typeLv1, setTypeLv1] = useState('')
  const [typeLv2, setTypeLv2] = useState('')
  const [typeLv3, setTypeLv3] = useState('')

  const handleLv1 = e => {
    setTypeLv3('')
    setTypeLv2('')
    setTypeLv1(e.target.value)
  }
  const handleLv2 = e => {
    setTypeLv3('')
    setTypeLv2(e.target.value)
  }
  const handleLv3 = e => setTypeLv3(e.target.value)

  const [imgFile, setImgFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleImgFile = (e) => {
    const file = e.target.files[0]
    setImgFile(file)
    setPreview(URL.createObjectURL(file));
  }

  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      sx={{display: 'flex', alignItems: "center"}}
    >
      <Container component={'form'} sx={{width: '35rem'}}>
        <Box sx={{backgroundColor: "white"}} margin={'auto'} padding={"2rem"}>
          <Stack spacing={2}>
            {/* 이미지 파일 */}
            <Box
              width={'100%'}borderRadius={'0.75rem'} backgroundColor={'#cfcfcf'}
              sx={{ aspectRatio: 1}}
            >
              {preview && <img src={preview} alt={preview} style={{ width: '100%', height: '100%', objectFit: 'contain' }}></img>}
            </Box>
            <TextField type='file' size='small' fullWidth onChange={handleImgFile}></TextField>
            {/* 대분류 */}
            <FormControl fullWidth size='small'>
              <InputLabel id="clothes-type-lv1-select-label">옷 유형</InputLabel>
              <Select
                id="clothes-type-lv1-select" labelId="clothes-type-lv1-select--label"
                label="추천 유형"
                value={typeLv1}
                onChange={handleLv1}
              >
                {Object.keys(clothesInfo).map((el) => {
                  return <MenuItem key={el} value={el}>{clothesInfo[el]['kr']}</MenuItem>
                })}
              </Select>
            </FormControl>

            <FormControl fullWidth size='small'>
              <InputLabel id="clothes-type-lv2-select-label">하위 유형</InputLabel>
              <Select
                id="clothes-type-lv2-select" labelId="clothes-type-lv2-select--label"
                label="추천 유형"
                value={typeLv2}
                onChange={handleLv2}
                disabled={!typeLv1}
              >
                {typeLv1 && Object.keys(clothesInfo[typeLv1]['sub']).map((el) => {
                  return <MenuItem key={el} value={el}>{clothesInfo[typeLv1]['sub'][el]['kr']}</MenuItem>
                })}
              </Select>
            </FormControl>

            <FormControl fullWidth size='small'>
              <InputLabel id="clothes-type-lv3-select-label">세부 유형</InputLabel>
              <Select
                id="clothes-type-lv3-select" labelId="clothes-type-lv3-select--label"
                label="추천 유형"
                value={typeLv3}
                onChange={handleLv3}
                disabled={!typeLv2}
              >
                {typeLv2 && Object.keys(clothesInfo[typeLv1]['sub'][typeLv2]['sub']).map((el) => {
                  return <MenuItem key={el} value={el}>{clothesInfo[typeLv1]['sub'][typeLv2]['sub'][el]}</MenuItem>
                })}
              </Select>
            </FormControl>
            
            <Stack direction={'row'} spacing={2}>
              <Button variant='contained' fullWidth size='small' disableElevation
              >
                추가
              </Button>
              <Button variant='contained' fullWidth size='small' disableElevation
              >
                취소
              </Button>
            </Stack>

          </Stack>
        </Box>
      </Container>
    </Modal>
  )
}

export default ClothesAppendModal
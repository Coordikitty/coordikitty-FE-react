import React, { useState, useRef, useEffect } from 'react'
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
  Button,
  Typography
} from '@mui/material'
import CheckroomIcon from '@mui/icons-material/Checkroom';
import uploadClothesApi from '../../apis/closet/uploadClothesApi';
import clothesInfo from '../../utils/clothesInfo'
import styleInfo from '../../utils/styleInfo'
import seasonInfo from '../../utils/seasonInfo'
import fitInfo from '../../utils/fitInfo'
import thicknessInfo from '../../utils/thicknessInfo'
import genderInfo from '../../utils/genderInfo'


const ClothesAppendModal = ({ modalOpen, handleModalClose }) => {
  const [typeLv1, setTypeLv1] = useState('')
  const [typeLv2, setTypeLv2] = useState('')
  const [typeLv3, setTypeLv3] = useState('')
  const [style, setStyle] = useState('')
  // const [season, setSeason] = useState('')
  const [fit, setFit] = useState('')
  const [thickness, setThickness] = useState('')
  const [gender, setGender] = useState('')
  const [imgFile, setImgFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const fileInputRef = useRef()

  useEffect(() => {
    setPreview(null)
    setImgFile(null)
    setTypeLv1('')
    setTypeLv2('')
    setTypeLv3('')
    setFit('')
    setThickness('')
    setGender('')
  }, [modalOpen])

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

  const handleImgUploadBtn = () => {
    fileInputRef.current.click()
  }
  const handleImgFile = (e) => {
    const file = e.target.files[0]
    setImgFile(file)
    setPreview(URL.createObjectURL(file));
  }

  const handleUpload = async() => {
    try {
      const formData = new FormData()
      const data = {
        large: typeLv1,
        medium: typeLv2,
        small: typeLv3,
        fit,
        gender,
        style,
        thickness
      }
      console.log(data)
      formData.append('closetPostRequestDto', new Blob([JSON.stringify(data)], {type: 'application/json'}))
      formData.append('clothImg', imgFile)
      console.log(formData)
      const res = await uploadClothesApi(formData)
      console.log('uploadClothesApi res : ', res)
      alert('옷 정보 등록 성공')
      handleModalClose()
    } catch (error) {
      console.error(error)
      alert('옷 정보 업로드 실패')
    }
  }

  

  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      sx={{ display: 'flex', alignItems: "center" }}
    >
      <Container component={'form'} sx={{ width: '70rem' }}>
        <Stack backgroundColor={'white'} spacing={2} margin={'auto'} padding={"2rem"}>
          <Stack spacing={2} direction={'row'}>

            {/* Right : 이미지 파일 */}
            <Stack spacing={2} width={'100%'} >
              <Box flexGrow={1} onClick={handleImgUploadBtn} 
                width={'100%'} sx={{ aspectRatio: '1' }} borderRadius={'0.75rem'} backgroundColor={'#cfcfcf'}>
                {preview ? 
                  <img 
                    src={preview} alt={preview} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  ></img> 
                  :
                  <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                    <CheckroomIcon sx={{width: '7rem', height: '7rem'}}></CheckroomIcon>
                    <Typography variant='h3'>옷 선택하기</Typography>
                  </Stack>}
              </Box>
              <input
                ref={fileInputRef} type='file' accept='image/*'
                onChange={handleImgFile} style={{display: 'none'}}
              ></input>
            </Stack>

            {/* Left 옷 정보 */}
            <Stack width={'100%'} spacing={2}>

              {/* 대분류 */}
              <ColthesPropertySelector
                label={'type-lv1'} labelKr={'옷 유형'} disabled={false}
                value={typeLv1} handleValue={handleLv1}
              >
                {Object.keys(clothesInfo).map((el) => {
                  return <MenuItem key={el} value={el}>{clothesInfo[el]['kr']}</MenuItem>
                })}
              </ColthesPropertySelector>

              {/* 중분류 */}
              <ColthesPropertySelector
                label={'type-lv2'} labelKr={'하위 유형'} disabled={!typeLv1}
                value={typeLv2} handleValue={handleLv2}
              >
                {typeLv1 && Object.keys(clothesInfo[typeLv1]['sub']).map((el) => {
                  return <MenuItem key={el} value={el}>{clothesInfo[typeLv1]['sub'][el]['kr']}</MenuItem>
                })}
              </ColthesPropertySelector>

              {/* 소분류 */}
              <ColthesPropertySelector
                label={'type-lv3'} labelKr={'세부 유형'} disabled={!typeLv2}
                value={typeLv3} handleValue={handleLv3}
              >
                {typeLv2 && Object.keys(clothesInfo[typeLv1]['sub'][typeLv2]['sub']).map((el) => {
                  return <MenuItem key={el} value={el}>{clothesInfo[typeLv1]['sub'][typeLv2]['sub'][el]}</MenuItem>
                })}
              </ColthesPropertySelector>

              {/* 스타일 유형 */}
              <ColthesPropertySelector
                label={'style'} labelKr={'스타일'} disabled={false}
                value={style} handleValue={(e) => { setStyle(e.target.value) }}
              >
                {styleInfo.map((el) => {
                  return <MenuItem key={el.style} value={el.style}>{el.kr}</MenuItem>
                })}
              </ColthesPropertySelector>

              {/* 계절 유형 */}
              {/* <ColthesPropertySelector
                label={'season'} labelKr={'계절'} disabled={false}
                value={season} handleValue={(e) => { setSeason(e.target.value) }}
              >
                {seasonInfo.map((el) => {
                  return <MenuItem key={el.val} value={el.val}>{el.kr}</MenuItem>
                })}
              </ColthesPropertySelector> */}

              {/* 핏 유형 */}
              <ColthesPropertySelector
                label={'fit'} labelKr={'핏'} disabled={false}
                value={fit} handleValue={(e) => { setFit(e.target.value) }}
              >
                {fitInfo.map((el) => {
                  return <MenuItem key={el.val} value={el.val}>{el.kr}</MenuItem>
                })}
              </ColthesPropertySelector>

              {/* 두께 */}
              <ColthesPropertySelector
                label={'thickness'} labelKr={'두께'} disabled={false}
                value={thickness} handleValue={(e) => { setThickness(e.target.value) }}
              >
                {thicknessInfo.map((el) => {
                  return <MenuItem key={el.val} value={el.val}>{el.kr}</MenuItem>
                })}
              </ColthesPropertySelector>

              {/* 성별 */}
              <ColthesPropertySelector
                label={'gender'} labelKr={'성별'} disabled={false}
                value={gender} handleValue={(e) => { setGender(e.target.value) }}
              >
                {genderInfo.map((el) => {
                  return <MenuItem key={el.val} value={el.val}>{el.kr}</MenuItem>
                })}
              </ColthesPropertySelector>

            </Stack>

          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Button variant='contained' fullWidth disableElevation onClick={handleModalClose}>
              취소
            </Button>
            <Button 
              variant='contained' fullWidth disableElevation color='secondary' 
              disabled={!(typeLv1 && typeLv2 && typeLv3 && fit && style && gender && thickness)}
              onClick={handleUpload}
            >추가</Button>
          </Stack>
        </Stack>
      </Container>
    </Modal>
  )
}

const ColthesPropertySelector = ({ label, labelKr, disabled, value, handleValue, children }) => {
  return (
    <FormControl fullWidth size='small'>
      <InputLabel id={`clothes-${label}-select-label`}>{labelKr}</InputLabel>
      <Select
        id={`clothes-${label}-select`} labelId={`clothes-${label}-select-label`}
        label={labelKr}
        value={value}
        onChange={handleValue}
        disabled={disabled}
      >
        {children}
      </Select>
    </FormControl>
  )
}

export default ClothesAppendModal
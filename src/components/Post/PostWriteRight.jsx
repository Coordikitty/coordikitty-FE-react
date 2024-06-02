import React  from 'react'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import CheckroomIcon from '@mui/icons-material/Checkroom';
import styleInfo from '../../utils/styleInfo';

const PostWriteRight = ({content, setContent, style, setStyle,  handleModalOpen, isValid, handleSubmit, clothImgs}) => {

  const handleContent = e => setContent(e.target.value)
  const handleStyle = e => setStyle(e.target.value)
  // const handleSeason = e => setSeason(e.target.value)
  // const handleSituation = e => setSituation(e.target.value)

  return (
    <Stack width={'100%'} padding={'1rem 0.5rem'} justifyContent={'space-between'} spacing={2}>
      <TextField
        label={'내용'} rows={5}
        fullWidth multiline
        value={content} onChange={handleContent}
      ></TextField>

      {/* 스타일 분류 */}
      <FormControl fullWidth>
        <InputLabel id="post-write-style-select-label">스타일</InputLabel>
        <Select
          id="post-write-style-select" labelId="post-write-style-select-label"
          label="스타일"
          value={style}
          onChange={handleStyle}
        >
          {styleInfo.map((el) => {
            return <MenuItem key={el.style} value={el.style}>{el.kr}</MenuItem>
          })}
        </Select>
      </FormControl>

      {/* 계절 */}
      {/* <FormControl fullWidth>
        <InputLabel id="post-write-season-select-label">계절</InputLabel>
        <Select
          id="post-write-season-select" labelId="post-write-season-select-label"
          label="계절"
          value={season}
          onChange={handleSeason}
        >
          {seasonInfo.map((el) => {
            return <MenuItem key={el.val} value={el.val}>{el.kr}</MenuItem>
          })}
        </Select>
      </FormControl> */}

      {/* 상황 */}
      {/* <FormControl fullWidth>
        <InputLabel id="post-write-situation-select-label">상황</InputLabel>
        <Select
          id="post-write-situation-select" labelId="post-write-situation-select-label"
          label="상황"
          value={situation}
          onChange={handleSituation}
        >

        </Select>
      </FormControl> */}

      <Stack flexGrow={1}
        borderRadius={'0.75rem'}
        justifyContent={'center'}
        alignContent={'center'}
        textAlign={'left'}        
        >
        <Typography paddingLeft={'1rem'} variant='body1'>옷 정보</Typography>
        <Stack direction={'row'} width={'100%'} flexWrap={'wrap'} justifyContent={'center'}>
          {clothImgs.map((clothImg) => {
            return <Box key={clothImg} padding={'0.5rem'} width={'12rem'} height={'15rem'} >
              <img src={clothImg} alt={clothImg} style={{width: '100%', height: '100%', borderRadius: '0.75rem', objectFit:'cover'}}></img>              
            </Box>
          })}
          <Stack 
            justifyContent={'center'} alignItems={'center'} 
            textAlign={'center'} width={'11rem'} height={'14rem'} 
            margin={'0.5rem'} boxSizing={'border-box'} borderRadius={'0.75rem'}
            onClick={handleModalOpen} boxShadow={'rgba(0, 0, 0, 0.35) 0px 2px 5px'}
          >
            <CheckroomIcon sx={{ fontSize: '3rem' }} ></CheckroomIcon>
            <Typography variant='body1' >옷 정보 추가하기</Typography>
          </Stack>
          
        </Stack>
      </Stack>

      <Button
        variant='contained' fullWidth disableElevation color='secondary'
        onClick={handleSubmit}
        disabled={!isValid} 
      >작성 완료</Button>
    </Stack>
  )
}

export default PostWriteRight
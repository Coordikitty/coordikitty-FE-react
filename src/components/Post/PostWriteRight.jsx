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
import seasonInfo from '../../utils/seasonInfo';

const PostWriteRight = ({style, setStyle, season, setSeason, situation, setSituation, handleModalOpen}) => {

  const handleStyle = e => setStyle(e.target.value)
  const handleSeason = e => setSeason(e.target.value)
  const handleSituation = e => setSituation(e.target.value)

  return (
    <Stack width={"100%"} padding={'1rem 0.5rem'} justifyContent={'space-between'} spacing={2}>
      <TextField
        label={'내용'} rows={5}
        fullWidth multiline
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
      <FormControl fullWidth>
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
      </FormControl>

      {/* 상황 */}
      <FormControl fullWidth>
        <InputLabel id="post-write-situation-select-label">상황</InputLabel>
        <Select
          id="post-write-situation-select" labelId="post-write-situation-select-label"
          label="상황"
          value={situation}
          onChange={handleSituation}
        >

        </Select>
      </FormControl>

      <Box flexGrow={1}
        borderRadius={'0.75rem'}
        textAlign={'center'}
        alignContent={'center'}
        onClick={handleModalOpen}
      >
        <CheckroomIcon sx={{ fontSize: '7rem' }} color='primary'></CheckroomIcon>
        <Typography variant='h3' color='primary'>옷 정보 추가하기</Typography>
      </Box>

      <Button
        variant='contained' fullWidth disableElevation
        onClick={() => { console.log('first') }}
      >작성 완료</Button>
    </Stack>
  )
}

export default PostWriteRight
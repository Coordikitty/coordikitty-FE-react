import React, { useEffect, useState } from 'react';
import terms from '../../utils/terms';
import { 
  Box,
  useTheme,
  Checkbox,
  FormControlLabel,
  Typography
} from '@mui/material';
const Terms = ({setNextVaild}) => {

  const [isAgree, setIsAgree] = useState(true)
  const theme = useTheme()

  useEffect(() => {
    setNextVaild(isAgree)
  }, [isAgree, setNextVaild])
  
  return (
    <>
      <Box 
        sx={{
          overflowY: 'scroll',
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: '0.75rem',
          height: '30rem'
        }}
      >
        {terms}
      </Box>
      <FormControlLabel
        label={<Typography variant='h4'>위 약관에 동의합니다.</Typography>}
        control={
          <Checkbox 
            size='large' 
            color='secondary' 
            onClick={() => {setIsAgree(!isAgree)}}
            checked={isAgree}
          ></Checkbox>
        }
      ></FormControlLabel>
    </>
  )
}




export default Terms
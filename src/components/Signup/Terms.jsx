import React from 'react';
import terms from '../../utils/terms';
import { 
  Box,
  useTheme,
  Checkbox,
  FormControlLabel,
  Typography
} from '@mui/material';
const Terms = () => {

  const theme = useTheme()
  
  return (
    <>
      <Box 
        sx={{
          overflowY: 'scroll',
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: '0.75rem'
        }}
      >
        {terms}
      </Box>
      <FormControlLabel
        label={<Typography variant='h4'>위 약관에 동의합니다.</Typography>}
        control={
          <Checkbox size='large' color='secondary'></Checkbox>
        }
      ></FormControlLabel>
    </>
  )
}




export default Terms
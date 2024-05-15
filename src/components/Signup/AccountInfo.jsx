import React from 'react'
import { 
  Box,
  TextField,
  Typography
} from '@mui/material'

const AccountInfo = ({ register, errors }) => {
  return (
    <Box width={'70%'}>
      <Box>
        <TextField
          id="email"
          type='email'
          label="이메일"
          variant="standard"
          margin='dense'
          fullWidth
          {...register("email", {
            required: "이메일을 입력해 주세요.",
          })}
        />
        {errors.email && <Typography color={'error'}>{errors.email.message}</Typography>}
      </Box>
    </Box>
  )
}



export default AccountInfo
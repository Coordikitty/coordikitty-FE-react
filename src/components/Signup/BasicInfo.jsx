import React, { useEffect } from 'react'

import { 
  Box, 
  TextField,
  Typography
} from '@mui/material'

import { useForm } from 'react-hook-form'
const BasicInfo = ({setNextVaild, parentSetValue}) => {

  const { 
    register, 
    getValues,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange'
  })

  useEffect(() => {
    if(isValid) {
      const data = getValues()
      Object.keys(data).map((key) =>  {
        if(key === 'password_check') { return null}
        else { parentSetValue(key, data[key]); return null}
      })
    }
    setNextVaild(isValid)
  }, [isValid, parentSetValue, getValues, setNextVaild])



  return (
    <Box width={'70%'}>
      <Box>
        <TextField
          id="tall" type='number' label="키"
          variant="standard" margin='dense' fullWidth
          {...register("tall", {
            required: "키를 입력해 주세요.",
          })} />
        {errors.tall && <Typography color={'error'}>{errors.tall.message}</Typography>}
      </Box>
      <Box>
        <TextField
          id="weight" type='number' label="몸무게"
          variant="standard" margin='dense' fullWidth
          {...register("weight", {
            required: "몸무게를 입력해 주세요.",
          })} />
        {errors.weight && <Typography color={'error'}>{errors.weight.message}</Typography>}
      </Box>
      <Box>
        <TextField
          id="footSize" type='number' label="신발 사이즈"
          variant="standard" margin='dense' fullWidth
          {...register("footSize", {
            required: "신발 사이즈를 입력해 주세요.",
          })} />
        {errors.footSize && <Typography color={'error'}>{errors.footSize.message}</Typography>}
      </Box>
    </Box>
    
  )
}

export default BasicInfo
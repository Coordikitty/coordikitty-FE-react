import { 
  Box,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect } from 'react'
import { useForm, Controller, } from 'react-hook-form'
const GoogleAccountInfo = ({setNextVaild, parentSetValue}) => {

  const { 
    register, 
    control,
    getValues,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      phoneNumber: ''
    }
  })


  const handlePhoneNumberChange = (value) => {
    value = value.replace(/\D/g, "");
    if(value.length < 4) {
      return value;
    } else if (value.length < 8) {
      return value.slice(0,3) + "-" + value.slice(3)
    } else {
      return value.slice(0,3) + "-" + value.slice(3,7) + "-" + value.slice(7)
    }
  }

  useEffect(() => {
    if(isValid) {
      const data = getValues()
      Object.keys(data).map((key) =>  {
        if (key === 'birth') {
          const [year, month, day] = data.birth.split('-')
          parentSetValue('year', year);
          parentSetValue('month', month);
          parentSetValue('day', day);
        } else if(key !== 'password_check') { 
          parentSetValue(key, data[key]);
        }
        return null
      })
    }
    setNextVaild(isValid)
  }, [isValid, parentSetValue, getValues, setNextVaild])

  return (
    <Box width={'70%'}>


      <Box>
        <TextField
          id="name" type='text' label="이름"
          variant="standard" margin='dense' fullWidth
          {...register("name", {
            required: "이름을 입력해 주세요.",
            pattern: {
            },
          })} />
        {errors.nickname && <Typography color={'error'}>{errors.nickname.message}</Typography>}
      </Box>

      <Box>
        <TextField
          id="nickname" type='text' label="닉네임"
          variant="standard" margin='dense' fullWidth
          {...register("nickname", {
            required: "닉네임을 입력해 주세요.",
            pattern: {
            },
          })} />
        {errors.nickname && <Typography color={'error'}>{errors.nickname.message}</Typography>}
      </Box>


      <Box>
        <TextField
          id="birth" type='date' label="생년월일" focused
          variant="standard" margin='dense' fullWidth
          sx={{
            '& input' : {
              paddingLeft: '2rem'
            },
            '& input::-webkit-calendar-picker-indicator' : {
              position: 'absolute',
              right: '-0.5rem',
              width: '100%',
              backgroundColor: 'transparent',
              color: 'transparent'
              // backgroundColor: 'red',
            }
          }}
          {...register("birth", {
            required: "생년월일을 입력해 주세요",
            validate: {

            }
          })} />
        {errors.birthdate && <Typography color={'error'}>{errors.birthdate.message}</Typography>}
      </Box>


      <Box>
        <Controller
          control={control}
          name="phoneNumber"
          rules={{
            required: "휴대전화번호를 입력해 주세요.",
            pattern: {
              value: /^\d{3}-\d{4}-\d{4}$/,
              message: '휴대전화번호 형식에 맞지 않습니다.'
            },
          }}
          render={({ field }) => (
            <TextField
              id="phoneNumber" type="tel" label="휴대전화"
              variant="standard" margin='dense' fullWidth
              value={field.value}
              onChange={e => field.onChange(handlePhoneNumberChange(e.target.value))}
            />
          )}
        />
        {errors.phoneNumber && <Typography color={'error'}>{errors.phoneNumber.message}</Typography>}
      </Box>


      {/* <Box >
        <FormLabel>Gender</FormLabel>
        <RadioGroup defaultValue="other" name="gender" row  sx={{paddingLeft: '0.5rem'}}>
          <FormControlLabel value="male"   control={<Radio color='secondary' {...register("gender")}/>} label="Male" />
          <FormControlLabel value="female" control={<Radio color='secondary' {...register("gender")}/>} label="Female" />
          <FormControlLabel value="other"  control={<Radio color='secondary' {...register("gender")}/>} label="Other" />
        </RadioGroup>
      </Box> */}

    </Box>
  )
}



export default GoogleAccountInfo
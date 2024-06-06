import {
  Box,
  TextField,
  Typography,
  Button,
  Stack
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm, Controller, } from 'react-hook-form'
import signupDupCheck from '../../apis/auth/signupDupCheck'


const AccountInfo = ({ setNextVaild, parentSetValue }) => {

  const {
    register,
    control,
    watch,
    getValues,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      phoneNumber: ''
    }
  })

  const [emailDupCheck, setEmailDupCheck] = useState(true)
  const [nicknameDupCheck, setNicknameDupCheck] = useState(true)

  const handlePhoneNumberChange = (value) => {
    value = value.replace(/\D/g, "");
    if (value.length < 4) {
      return value;
    } else if (value.length < 8) {
      return value.slice(0, 3) + "-" + value.slice(3)
    } else {
      return value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7)
    }
  }

  const handleEmailDupcheck = async() => {
    try {
      const res = await signupDupCheck('email', watch('email'))
      console.log('signupDupCheck res : ', res)
      if(res) {
        alert('사용가능한 이메일입니다.')
        setEmailDupCheck(true)
        clearErrors('email')
      } else {
        alert('중복된 이메일입니다.')
      }
      
    } catch (error) {
      alert('중복확인 실패')
      console.error(error);
    }
  }

  const handleNicknameDupcheck = async() => {
    try {
      const res = await signupDupCheck('nickname', watch('nickname'))
      console.log('signupDupCheck res : ', res)
      if(res) {
        alert('사용가능한 닉네임입니다.')
        setNicknameDupCheck(true)
        clearErrors('nickname')
      } else {
        alert('중복된 닉네임입니다.')
      } 
    } catch (error) {
      alert('중복확인 실패')
      console.error(error);
    }
  }

  useEffect(() => {
    if (isValid && emailDupCheck && nicknameDupCheck) {
      const data = getValues()
      Object.keys(data).map((key) => {
        if (key === 'birth') {
          const [year, month, day] = data.birth.split('-')
          parentSetValue('year', year);
          parentSetValue('month', month);
          parentSetValue('day', day);
        } else if (key !== 'password_check') {
          parentSetValue(key, data[key]);
        }
        return null
      })
    }
    setNextVaild(isValid && emailDupCheck && nicknameDupCheck)
  }, [isValid, parentSetValue, getValues, setNextVaild, emailDupCheck, nicknameDupCheck])

  return (
    <Box width={'70%'}>

      <Box>
        <Stack direction={'row'} alignItems={'baseline'}>
          <TextField
            id="email" type='email' label="이메일"
            variant="standard" margin='dense' fullWidth
            {...register("email", {
              required: "이메일을 입력해 주세요.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "이메일 형식에 맞지 않습니다.",
              },
              validate: {
                onChange : () => {
                  setEmailDupCheck(false)
                }
              }
            })} />
          <Button 
            color='black' variant='contained' 
            margin='dense' disableElevation sx={{textWrap: 'nowrap'}}
            onClick={handleEmailDupcheck}
          >중복 확인</Button>
        </Stack>
        {errors.email ? <Typography color={'error'}>{errors.email.message}</Typography>:
        !emailDupCheck && <Typography color={'error'}>이메일 중복확인이 필요합니다.</Typography>}
      </Box>

      <Box>
        <Stack direction={'row'} alignItems={'baseline'}>
          <TextField
            id="nickname" type='text' label="닉네임"
            variant="standard" margin='dense' fullWidth
            {...register("nickname", {
              required: "닉네임을 입력해 주세요.",
              pattern: {},
              validate: {
                onChange : () => {
                  setNicknameDupCheck(false)
                }
              }
            })} />
          <Button 
            color='black' variant='contained' 
            margin='dense' disableElevation sx={{textWrap: 'nowrap'}}
            onClick={handleNicknameDupcheck}
          >중복 확인</Button>
        </Stack>
        {errors.nickname ? <Typography color={'error'}>{errors.nickname.message}</Typography>:
        !nicknameDupCheck && <Typography color={'error'}>닉네임 중복확인이 필요합니다.</Typography>}
      </Box>

      <Box>
        <TextField
          id="password" type='password' label="비밀번호"
          variant="standard" margin='dense' fullWidth
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/,
              message: "8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.",
            },
          })} />
        {errors.password && <Typography color={'error'}>{errors.password.message}</Typography>}
      </Box>

      <Box>
        <TextField
          id="password_check" type='password' label="비밀번호 확인"
          variant="standard" margin='dense' fullWidth
          {...register("password_check", {
            required: "비밀번호를 확인을 입력해 주세요.",
            validate: {
              check: (val) => {
                if (watch("password") !== val) {
                  return "비밀번호가 일치하지 않습니다.";
                }
              },
            }
          })} />
        {errors.password_check && <Typography color={'error'}>{errors.password_check.message}</Typography>}
      </Box>

      <Box>
        <TextField
          id="name" type='text' label="이름"
          variant="standard" margin='dense' fullWidth
          {...register("name", {
            required: "이름을 입력해 주세요.",
            pattern: {},
          })} />
        {errors.name && <Typography color={'error'}>{errors.name.message}</Typography>}
      </Box>

      <Box>
        <TextField
          id="birth" type='date' label="생년월일" focused
          variant="standard" margin='dense' fullWidth
          sx={{
            '& input': {
              paddingLeft: '2rem'
            },
            '& input::-webkit-calendar-picker-indicator': {
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



export default AccountInfo
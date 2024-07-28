import React from 'react'
import {
  Container,
  Stack,
  Modal,
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material'
import LogoWide from '../../assets/LogoWide.png'
import { useForm } from 'react-hook-form'
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/UserReducer';
import signinApi from '../../apis/auth/signinApi';
import GoogleLoginButton from './GoogleLoginButton';

const SigninModal = ({ modalOpen, handleModalClose }) => {

  const dispatch = useDispatch()
  const [, setCookie] = useCookies()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await signinApi(data)
      console.log("signinApi res : ", res)
      dispatch(login({
        email: res.email,
        nickname: res.nickname,
      }))
      sessionStorage.setItem('accessToken', res.tokenDto.accessToken)
      setCookie('refreshToken', res.tokenDto.refreshToken)
      handleModalClose()
      window.location.reload()
    } catch (error) {
      console.error(error)
      alert('로그인 실패')
    }
  }

  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      sx={{ display: 'flex', alignItems: "center" }}
    >
      <Container
        component={'form'} noValidate
        maxWidth={'xs'} sx={{ "&:focus-visible": { outline: 'none' } }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack
          spacing={3} padding={"5rem 5rem"}
          sx={{ backgroundColor: "#ffffff", }}
        >
          {/* Logo */}
          <Box>
            <Box width={'20rem'} height={'10rem'} margin={'auto'}>
              <img src={LogoWide} alt='logo'
                style={{width: '100%', height: '100%'}}
              ></img>
            </Box>
          </Box>

          {/* Email */}
          <Box>
            <TextField 
              id="email" type='email' label="이메일"
              variant="standard" margin='dense' fullWidth
              disabled={isSubmitting}
              {...register("email", {
                required: "이메일을 입력해 주세요.",
              })}
            />
            {errors.email && <Typography color={'error'}>{errors.email.message}</Typography>}
          </Box>

          {/* Password */}
          <Box>
            <TextField
              id="password" type='password' label="비밀번호"
              variant="standard" margin='dense' fullWidth
              disabled={isSubmitting}
              {...register("password", {
                required: "비밀번호를 입력해 주세요."
              })}
            />
            {errors.password && <Typography color={'error'}>{errors.password.message}</Typography>}
          </Box>

          {/* Submit */}
          <Button
            type='submit'
            variant='contained' fullWidth
            disabled={isSubmitting}
          >
            로그인
          </Button>

          {/* Social Login */}
          <Stack direction={'row'}>
            <GoogleLoginButton
              handleModalClose={handleModalClose}
            ></GoogleLoginButton>
          </Stack>

        </Stack>
      </Container>
    </Modal>

  )
}

export default SigninModal


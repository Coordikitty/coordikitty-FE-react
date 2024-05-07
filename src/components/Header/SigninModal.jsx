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
import { styled } from '@mui/system';
import LogoWide from '../../assets/LogoWide.png'
import { useForm } from 'react-hook-form'



const SigninModal = ({modalOpen, handleModalClose}) => {

  const { 
    register, 
    handleSubmit,
    formState: {isSubmitting, errors},
  } = useForm()


  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <Modal
        open={modalOpen}
        onClose={handleModalClose}
        sx={{display: 'flex', alignItems: "center"}}
      >
        <Container 
          maxWidth={'xs'}
          component={'form'}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{"&:focus-visible": {outline: 'none'}}}
        >
            <Stack 
              spacing={3}
              padding={"5rem 5rem"}
              sx={{
                backgroundColor: "#ffffff",
              }}
            >
              <Box>
                <Logo></Logo>
              </Box>

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
                  disabled={isSubmitting}
                />
                {errors.email && <Typography color={'error'}>{errors.email.message}</Typography>}
              </Box>
                
              <Box>
                <TextField 
                  id="password" 
                  type='password' 
                  label="비밀번호" 
                  variant="standard" 
                  margin='dense'
                  fullWidth
                  {...register("password", {
                    required: "비밀번호를 입력해 주세요."
                  })}
                  disabled={isSubmitting}
                />
                {errors.password && <Typography color={'error'}>{errors.password.message}</Typography>}
              </Box>

                <Button 
                  type='submit'
                  variant='contained' 
                  fullWidth
                  disabled={isSubmitting}
                >
                  로그인
                </Button>

            </Stack>
        </Container>
    </Modal>

  )
}

const Logo = styled('div')(() => {
  return {
    margin: 'auto',
    height: "10rem",
    width: "20rem",
    backgroundImage: `url(${LogoWide})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  }
})

export default SigninModal


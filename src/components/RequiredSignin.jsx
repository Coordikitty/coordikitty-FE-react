import React, { useState } from 'react'
import { 
  Stack,
  Typography,
  Button,
  Box
} from '@mui/material'
import SigninModal from './Header/SigninModal';
import RequiredSigninImg from '../assets/RequiredSigninImg.jpg'

const RequiredSignin = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);


  return (
    <Box
      marginTop={'2rem'} borderRadius={'0.75rem'} overflow={'hidden'}
      height={'calc(100vh - 16rem)'}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      sx={{backgroundImage: `url(${RequiredSigninImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
    >
      <Stack spacing={2} alignItems={'center'} justifyContent={'center'}
        height={'100%'} width={'100%'} padding={'10rem'}
        sx={{backgroundColor: 'rgba(0,0,0,0.4)'}}
      >
      <Typography variant='h1' color={'white'} paddingTop={'10rem'}>
        Coordikitty의 코디 추천시스템을 만나보세요!
      </Typography>
      <Box width={'30rem'}>
        <Button 
          color='secondary' variant='contained' fullWidth  disableElevation
          onClick={handleModalOpen}
        >
          로그인
        </Button>
      </Box>
      <SigninModal 
        modalOpen={modalOpen} 
        handleModalClose={handleModalClose}
      ></SigninModal>
      </Stack>
    </Box>
  )
}

export default RequiredSignin
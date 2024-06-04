import React, { useState } from 'react'
import { 
  Stack,
  Typography,
  Button,
  Box
} from '@mui/material'
import SigninModal from './Header/SigninModal';

const RequiredSignin = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);


  return (
    <Stack spacing={2}
      marginTop={'2rem'} borderRadius={'0.75rem'} 
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      padding={'10rem'} alignItems={'center'}
    >
      <Typography variant='h1' color={'black'}>
        로그인 후 이용해보세요!
      </Typography>
      <Box width={'30%'}>
        <Button 
          color='secondary' variant='contained' fullWidth size='large' disableElevation
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
  )
}

export default RequiredSignin
import React from 'react'
import { useState } from 'react'
import { 
  Stack, 
  Button, 
} from '@mui/material'
import SigninModal from './SigninModal'

const HeaderAuth = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <React.Fragment>
      <Stack direction={"row"} spacing={1}>
        <Button 
          variant="contained" 
          fullWidth 
          disableElevation
          onClick={handleModalOpen}
        > 로그인
        </Button>

        <Button variant="contained" fullWidth disableElevation>회워가입</Button>
      </Stack>
      <SigninModal 
        modalOpen={modalOpen} 
        handleModalClose={handleModalClose}
      ></SigninModal>
    </React.Fragment>
  )
}

export default HeaderAuth
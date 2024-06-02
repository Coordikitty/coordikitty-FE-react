import React from 'react'
import {
  Modal,
  Container,
  Button,
  Box
} from '@mui/material'
import Closet from './Closet'
const ClosetModal = ({ selectTool, modalOpen, handleModalClose }) => {

  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      sx={{ display: 'flex', alignItems: "center" }}
    >
      <Container maxWidth='md'>
        <Box
          width={'100%'}
          padding={"4rem 2rem"}
          sx={{ backgroundColor: 'white', borderRadius: '0.75rem' }}
        >
          <Closet selectTool={selectTool}></Closet>
          {selectTool && 
          <Button 
            variant='contained' fullWidth disableElevation color='secondary'
            disabled={selectTool.clothIds.length === 0}
            onClick={handleModalClose}
          >선택 완료</Button>}
        </Box>
      </Container>
    </Modal>
  )
}

export default ClosetModal
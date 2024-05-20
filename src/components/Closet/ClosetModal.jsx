import React from 'react'
import { 
  Modal, 
  Container,
} from '@mui/material'
import Closet from './Closet'
const ClosetModal = ({modalOpen, handleModalClose}) => {
  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      sx={{display: 'flex', alignItems: "center"}}
    >
      <Container maxWidth='md'>
        <Closet></Closet>

      </Container>
    </Modal>
  )
}

export default ClosetModal
import React, {useState} from 'react'
import { 
  Box,
  Tab,
  Tabs,
  Stack,
} from '@mui/material'
import UserInfo from '../components/Mypage/UserInfo'
import Closet from '../components/Closet/Closet'
import Bookmark from '../components/Mypage/Bookmark'

const HOME = "HOME"
const CLOSET = 'CLOSET'
const BOOKMARK = 'BOOKMARK'
const FOLLOWING = 'FOLLOWING'
const FOLLOWER = 'FOLLOWER'
const ACCOUNT = 'ACCOUNT'

const Mypage = () => {

  const [tab, setTab] = useState(HOME)

  const handleTab = (e, targetTab) => {
    console.log(targetTab)
    setTab(targetTab)
  }

  return (
    <Stack direction={'row'} marginTop={'2rem'} justifyContent={'space-between'}>
      {/* Left Tap */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        textColor='secondary'
        indicatorColor='secondary'
        value={tab}
        onChange={handleTab}
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: '15rem'}}
      >
        <Tab label="HOME" value={HOME}></Tab>
        <Tab label="CLOSET" value={CLOSET}></Tab>
        <Tab label="BOOKMARK" value={BOOKMARK}></Tab>
        <Tab label="FOLLOWER" value={FOLLOWER}></Tab>
        <Tab label="FOLLOWING" value={FOLLOWING}></Tab>
        <Tab label="ACCOUNT" value={ACCOUNT}></Tab>
      </Tabs>

      {/* Right Body */}
      <Box width={'calc(100% - 15rem)'} padding={'2rem'}>
        {tab === HOME && <UserInfo></UserInfo>}
        {tab === CLOSET && <Closet></Closet>}
        {tab == BOOKMARK && <Bookmark></Bookmark>}
      </Box>
    </Stack>

  )
}

export default Mypage
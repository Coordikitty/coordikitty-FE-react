import React, {useState} from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import PostListHeader from '../components/Post/PostListHeader'
import PostList from '../components/Post/PostList'


const imgs = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ux6b26C7E5tu4xKPTtRD9k6BIWWocpRlYw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-wcn3jgsEQGfFav2MyV1leQieIT0MycSNw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmStw9d-Us7qSmGNjOetJjqqDm687D0w85TQ&s',
  'https://r1.community.samsung.com/t5/image/serverpage/image-id/4584034i1693AC6FEC22DBF0/image-size/large?v=v2&px=999',
  'https://cdn.mapianist.com/preview-v2/5fbbfb5d-e354-47a3-8e73-bf3873890c10-1579278003.jpg',
  'https://i.ytimg.com/vi/wVy7IeRfr8c/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Hsxs3m1panoqbd6pncy7VU0wQySMtwX4wg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnkAo_J8Fg3C3pdUhTXiTAVF0iRj4UKSOMg&s',
  'https://i.namu.wiki/i/FwZBEXnuD9LDFA6Ol4eVwrL_xCJuWYn47c6U_KxHQqmzi47RHnsDgqC6b2FFysMfAe6I06ZhXzQVQlEy8xO3-Q.webp',
  'https://file.thisisgame.com/upload/nboard/news/2021/08/31/20210831122421_4643.jpg',
];

const getPostList = (page) => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      const data = [];
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        data.push({
          postId: i,
          postImgs: [imgs[i % 10]],
        });
      }
      console.log(data)
      resolve(data)
     }, 1500)
  })
};


const PostPage = () => {
  const [tap, setTap] = useState(0)
  const handleTap = (e, targetTap) => setTap(targetTap)
  console.log(tap)

  return (
    <Box marginTop={'2rem'}>
      <PostListHeader title='POST' isViewWrite={true}/>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '1rem' }} >
        <Tabs value={tap} onChange={handleTap}
          variant='fullWidth' textColor='secondary' indicatorColor="secondary"
        >
          <Tab label="팔로워" />
          <Tab label="인기 포스트" />
          <Tab label="추천 포스트" />
        </Tabs>
      </Box>

      {tap === 0 && <PostList getDataApi={getPostList}></PostList>}
      {tap === 1 && <PostList></PostList>}

    </Box>
  )
}

export default PostPage
import React, { useState, useEffect } from 'react'
import PostListHeader from '../Post/PostListHeader'
import PostList from '../Post/PostList'
import getPostListApi from '../../apis/post/getPostListApi'
const Bookmark = () => {

  const [postList, setPostList] = useState([])

  useEffect(() => {
    ;(async() => {
      const res = await getPostListApi()
      console.log('getPostListApi Res : ', res)
      setPostList(res)
    })()
  }, [])

  return (
    <>
      <PostListHeader
        title={'BOOKMARK'}
        isViewWrite={false}
      ></PostListHeader>
      <PostList postList={postList}></PostList>
    </>
  )
}

export default Bookmark
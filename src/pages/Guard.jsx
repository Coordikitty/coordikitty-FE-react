import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const Guard = ({children}) => {

  const nickname = useSelector(state => state.user.nickname)
  if (nickname) {
    return (children)
  } else {
    alert('로그인 후 이용하세요')
    return <Navigate to="/" replace />;
  }

}

export default Guard
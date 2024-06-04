import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const Guard = ({children}) => {

  const accessToken = useSelector(state => state.user.accessToken)

  if (accessToken) {
    return (children)
  } else {
    alert('로그인 후 이용하세요')
    return <Navigate to="/" replace />;
  }

}

export default Guard
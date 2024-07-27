import React from 'react'

import RequiredSignin from '../components/RequiredSignin'
import Recommend from '../components/Recommend'


const Home = () => {

  return (
    <React.Fragment>
      {/* 로그인 O : 옷 추천  컴포넌트*/}
      {sessionStorage.getItem('accessToken')
        ?<Recommend></Recommend>
        :<RequiredSignin></RequiredSignin>
      }
    </React.Fragment>
  )
}



export default Home
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import googleLoginApi from "../../apis/auth/googleLoginApi";
import { useCookies } from "react-cookie";
import { login } from "../../redux/UserReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = ({handleModalClose}) => {
  
  const dispatch = useDispatch()
  const [, setCookie] = useCookies()
  const navigate = useNavigate()

  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          type="icon"
          shape="circle"
          onSuccess={async (googleRes) => {
            console.log("google res : ", googleRes);

            const decoded = jwtDecode(googleRes.credential)
            console.log("decoded : ", decoded)
            
            const email = decoded.email
            const name = decoded.family_name+decoded.given_name

            const data = {
              email
            }

            try {
              const res = await googleLoginApi(data)
              console.log("googleLoginApi Res : ", res)
              dispatch(login({
                email: res.email,
                nickname: res.nickname,
                accessToken: res.tokenDto.accessToken
              }))
              setCookie('refreshToken', res.tokenDto.refreshToken)
              handleModalClose()
            } catch(error) {
              if(error.response.status == 401) {
                alert('회원가입이 필요한 소셜 계정입니다')
                navigate(`/sign-up?email=${email}&name=${name}`)
                handleModalClose()
              }
            }

          }}
          onFailure={(err) => {
            alert('구글 로그인 실패')
            console.log(err);
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton
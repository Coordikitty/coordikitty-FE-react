import api from "../api";

const signupDupCheck = (type, data) => {
  console.log('signupDupCheck Call : ', type, data)
  return api.get('/auth/signUp/dupCheck', {
    params: {
      [type] : data
    }
  })
}

export default signupDupCheck
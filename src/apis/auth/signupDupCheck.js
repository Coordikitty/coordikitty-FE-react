import api from "../api";

const signupDupCheck = (type, data) => {
  return api.get('/auth/signUp/dupCheck', {
    params: {
      type : data
    }
  })
}
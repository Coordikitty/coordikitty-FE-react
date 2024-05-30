import api from "../api";

const signinApi = (data) => {
  console.log('signinApi Call : ', data)
  return {
    accessToken : 'test acc',
    refeshToken : 'test ref'
  }
}

export default signinApi
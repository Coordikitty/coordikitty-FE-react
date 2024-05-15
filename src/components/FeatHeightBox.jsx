import { styled } from "@mui/material";
import { Box } from "@mui/material";


const FeatHeightBox = styled(Box)(() => {
  return {
    marginTop: '4rem',
    height: 'calc(100vh - 20rem)',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  }
})

export default FeatHeightBox
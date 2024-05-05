import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Arial',
    h1: {
      fontSize: "3.6rem",
      fontWeight: 700
    },
    h2: {
      fontSize: "2.4rem",
    },
    h3: {
      fontSize: "1.8rem",
    },
    body1: {
      fontSize: "1.2rem"
    },
    body2: {
      fontSize: "1.0rem"
    },
    button: {
      fontSize: "1.2rem"
    }
  },
  palette: {
    primary: {
      light: '#e8e8e8',
      main: '#d9d9d9',
      dark: '#aeaeae',
      contrastText: '#000000',
    }
  }
});

export default theme
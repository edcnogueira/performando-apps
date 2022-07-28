import  ThemeProvider  from "../node_modules/@mui/material/styles/ThemeProvider"
import createTheme from "../node_modules/@mui/material/styles/createTheme"
import responsiveFontSizes from "../node_modules/@mui/material/styles/responsiveFontSizes"


let theme = createTheme({
  palette: {
    primary: {
      main: "#003399"
    }
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 14,
  },

})

theme = responsiveFontSizes(theme)


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

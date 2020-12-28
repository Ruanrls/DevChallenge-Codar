import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from '../../public/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-size: 16px;
  }
`

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={Theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
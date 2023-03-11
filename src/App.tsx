import { SearchGit } from "./components"
import  GlobalStyles  from "./styles/global"

import { Container } from "./styles/styles" 
import { DefaultTheme, ThemeProvider } from "styled-components"

import usePersistedState from "./utils/usePersistedState"

import dark from "./styles/themes/dark"
import light from "./styles/themes/light"

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const themeToggler = () => {
      setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SearchGit handleTheme={themeToggler}/>
        <GlobalStyles />
      </Container>
    </ThemeProvider>  
  )
  
}

export default App

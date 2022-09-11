import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { CheckListProvider } from './contexts/CheckListContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CheckListProvider>
        <Header />
        <Main />
        <GlobalStyle />
      </CheckListProvider>
    </ThemeProvider>
  )
}

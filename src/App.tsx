import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CheckListProvider } from './contexts/CheckListContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/theme/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CheckListProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </CheckListProvider>
    </ThemeProvider>
  )
}

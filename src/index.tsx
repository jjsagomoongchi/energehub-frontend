import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)

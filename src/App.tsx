import { Main } from './component/templates/Main'

import styled from 'styled-components'

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
`

export default function App() {
  return (
    <StyledApp>
      <Main />
    </StyledApp>
  )
}

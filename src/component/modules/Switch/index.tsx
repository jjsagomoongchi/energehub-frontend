import styled from 'styled-components'
import { Percent } from '../../atoms/Percent'

const SwitchContainer = styled.div`
  height: 140px;
  width: 345px;
  background: #40474a;
  display: inline-block;
  border-radius: 20px;

  margin-top: 10px;
  margin-bottom: 10px;
`

const PercentCircle = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: #161b1e;
  margin-top: 7px;
  position: absolute;
`

const Switch = () => {
  return (
    <SwitchContainer>
      <Percent percent={100} label='전등 1' />

      <Percent percent={100} label='전등 2' />
      <Percent percent={100} label='전등 3' />
      <Percent percent={100} label='에어컨' />
    </SwitchContainer>
  )
}

export { Switch }

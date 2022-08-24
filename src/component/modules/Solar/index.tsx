import styled from 'styled-components'
import { Angle } from '../../atoms/Angle'

const SolarContainer = styled.div`
  height: 140px;
  width: 345px;
  background: #40474a;
  display: inline-block;
  border-radius: 20px;

  margin-top: 10px;
  margin-bottom: 10px;
`

const Solar = () => {
  return (
    <SolarContainer>
      <Angle xAngle={90} yAngle={90} />
    </SolarContainer>
  )
}

export { Solar }

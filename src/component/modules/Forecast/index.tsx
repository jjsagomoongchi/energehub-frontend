import styled from 'styled-components'
import { Weather } from '../../atoms/Weather'

const ForecastContainer = styled.div`
  height: 140px;
  width: 345px;
  background: #40474a;
  display: inline-block;
  border-radius: 20px;

  margin-top: 10px;
  margin-bottom: 10px;
`

const Forecast = () => {
  return (
    <ForecastContainer>
      <Weather time='지금' type='clear' label='24°' />
      <Weather time='4시' type='sunraise' label='일출' />
      <Weather time='5시' type='rain' label='20°' />
      <Weather time='6시' type='cloud' label='22°' />
      <Weather time='17시' type='sunset' label='일몰' />
    </ForecastContainer>
  )
}

export { Forecast }

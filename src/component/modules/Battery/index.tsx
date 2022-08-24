import styled from 'styled-components'
import { Percent } from '../../atoms/Percent'

const BatteryContainer = styled.div`
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

const Battery = () => {
  return (
    <BatteryContainer>
      <Percent percent={100} label='태양광' />

      <Percent percent={100} label='자전거' />
      <Percent percent={100} label='스위치' />
      <Percent percent={100} label='창문' />
    </BatteryContainer>
  )
}

export { Battery }

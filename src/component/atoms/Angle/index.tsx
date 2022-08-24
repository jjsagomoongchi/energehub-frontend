import styled from 'styled-components'
import { PieChart } from 'react-minimal-pie-chart'

interface IProps {
  xAngle: number
  yAngle: number
}

const AngleContainer = styled.div`
  height: 90%;
  width: 100%;
  // background: grey;
  display: inline-block;
  margin-top: 7px;
  margin-right: 10px;
  margin-left: 10px;
  // position: absolute;
`

const YAngleContainer = styled.div`
  height: 90%;
  width: 50%;
  background: grey;
  display: inline-block;
  // margin-top: 7px;
  margin-right: 10px;
  margin-left: 10px;
  // position: absolute;
`

const XAngleContainer = styled.div`
  height: 100%;
  width: 50%;
  // background: grey;
  display: inline-block;
  // margin-top: 7px;
  margin-right: 10px;
  margin-left: 10px;
  // position: absolute;
`

const Angle = ({ xAngle, yAngle }: IProps) => {
  return (
    <AngleContainer>
      <YAngleContainer>{xAngle}</YAngleContainer>
      <XAngleContainer>{yAngle}</XAngleContainer>
    </AngleContainer>
  )
}

export { Angle }

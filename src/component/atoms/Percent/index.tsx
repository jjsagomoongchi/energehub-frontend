import styled from 'styled-components'
import { PieChart } from 'react-minimal-pie-chart'

interface IProps {
  percent: number
  label: string
}

const PercentContainer = styled.div`
  height: 92px;
  width: 60px;
  // background: grey;
  display: inline-block;
  margin-top: 7px;
  margin-right: 10px;
  margin-left: 10px;
  // position: absolute;
`

const PercentCircle = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: #161b1e;
  display: inline-block;
  margin-top: 7px;
  position: absolute;
`

const StyledP = styled.span`
  font-size: 18px;
  // font-weight: bold;
  color: #fff;
  // text-align: center;
  margin-top: -10px;
`

const Percent = ({ percent, label }: IProps) => {
  return (
    <PercentContainer>
      {/* <PercentCircle /> */}
      <PieChart
        data={[
          {
            value: percent,
            color: '#42AC66',
            name: 'name1',
          },
        ]}
        reveal={percent}
        lineWidth={18}
        background='#161B1E'
        lengthAngle={360}
        rounded
        animate
        label={({ dataEntry }: { dataEntry: any }) => dataEntry.value + '%'}
        labelStyle={{
          fontSize: '26px',
          fill: '#FFFFFF',
        }}
        labelPosition={0}
      />

      <StyledP>{label}</StyledP>
    </PercentContainer>
  )
}

export { Percent }

import styled from 'styled-components'
import ClearIcon from './clear.png'
import CloudIcon from './cloud.png'
import RainIcon from './rain.png'
import SunraiseIcon from './raise.png'
import SunsetIcon from './set.png'

interface IProps {
  time?: string
  type?: 'clear' | 'cloud' | 'rain' | 'sunraise' | 'sunset'
  label?: string

  top?: number
  bottom?: number
  height?: number
  // width?: number
}

const WeatherContainer = styled.div`
  height: 120px;
  width: 40px;
  // background: grey;
  display: inline-block;
  margin-top: 15px;
  margin-right: 10px;
  margin-left: 10px;
  // position: absolute;
`

const StyledIcon = styled.img<IProps>`
  width: 40px;
  height: ${({ height }) => height}px;

  margin-top: ${({ top }) => top}px;
  margin-bottom: ${({ bottom }) => bottom}px;
`

const StyledP = styled.span`
  font-size: 18px;
  // font-weight: bold;
  color: #fff;
  // text-align: center;
  margin-top: -10px;
`

const Weather = ({ time, type, label }: IProps) => {
  let imageSrc = undefined
  let top,
    bottom,
    height = undefined

  if (type === 'clear') {
    imageSrc = ClearIcon
    top = 10
    bottom = 10
    height = 40
  }

  if (type === 'cloud') {
    imageSrc = CloudIcon
    top = 15
    bottom = 20
    height = 25
  }

  if (type === 'rain') {
    imageSrc = RainIcon
    top = 10
    bottom = 10
    height = 40
  }

  if (type === 'sunraise') {
    imageSrc = SunraiseIcon
    top = 15
    bottom = 15
    height = 30
  }

  if (type === 'sunset') {
    imageSrc = SunsetIcon
    top = 15
    bottom = 15
    height = 30
  }

  return (
    <WeatherContainer>
      <StyledP>{time}</StyledP>
      <StyledIcon src={imageSrc} top={top} bottom={bottom} height={height} />
      <StyledP>{label}</StyledP>
    </WeatherContainer>
  )
}

export { Weather }

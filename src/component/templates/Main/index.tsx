import { Battery } from '../../modules/Battery'
import { Switch } from '../../modules/Switch'

import { Forecast } from '../../modules/Forecast'
import { Solar } from '../../modules/Solar'

const Main = () => {
  return (
    <>
      <Battery />
      <br></br>
      <Forecast />
      <br></br>
      <Solar />
      <br></br>
      <Switch />
      <br></br>
      <Switch />
    </>
  )
}

export { Main }

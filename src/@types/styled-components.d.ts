import 'styled-components'
import type { ThemeType } from 'styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}

  export type ThemeColorType = ThemeType['color'][keyof ThemeType['color']]
}

import styled from 'styled-components'
import { color } from 'utils/vars'
import Button from './Button'

export const ButtonDark = styled(Button)`
  border-color: ${color.backgroundDark};
  background: ${color.backgroundDark};
  color: ${color.white};
`

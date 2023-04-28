import styled from 'styled-components'
import { media } from 'utils/vars'
import { container } from 'utils/mixins'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  ${container}
`

export default Container

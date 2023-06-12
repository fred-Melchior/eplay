import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.green};
  color: ${colors.white};
  border-radius: 8px;
  padding: ${(props) => (props.size === 'big' ? '16px 8px' : '4px 6px')};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weigth: bold;
  display: inline-block;
`

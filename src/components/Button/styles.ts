import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? 'transparent' : colors.green};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.white : colors.green)};
  color: ${colors.white};
  border-radius: 8px;
  font-size: 16px;
  font-weigth: bold;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  border-radius: 8px;
  font-size: 16px;
  font-weigth: bold;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
`

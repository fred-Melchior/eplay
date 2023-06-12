import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.grey};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`

export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  color: ${colors.lightgrey};
  text-decoration: none;
  margin-right: 8px;
`

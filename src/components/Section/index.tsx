import { ContainerProd, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <ContainerProd background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </ContainerProd>
)

export default Section

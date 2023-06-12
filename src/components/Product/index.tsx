import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  desc: string
  infos: string[]
  img: string
  id: number
}

const Product = ({ title, category, system, desc, infos, img, id }: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/produtos/${id}`}
    >
      <img src={img} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.TitleCard>{title}</S.TitleCard>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(desc)}</S.Description>
    </S.Card>
  )
}

export default Product

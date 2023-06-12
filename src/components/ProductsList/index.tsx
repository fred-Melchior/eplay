import Product from '../Product'
import * as S from './styles'
import { parseToBrl } from '../../Utils'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ background, title, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.ContainerProd background={background} id={id}>
        <div className="container">
          <S.Title>{title}</S.Title>
          <S.List>
            {games &&
              games.map((game) => (
                <li key={game.id}>
                  <Product
                    id={game.id}
                    title={game.name}
                    category={game.details.category}
                    system={game.details.system}
                    desc={game.description}
                    img={game.media.thumbnail}
                    infos={getGameTags(game)}
                  />
                </li>
              ))}
          </S.List>
        </div>
      </S.ContainerProd>
    </>
  )
}

export default ProductsList

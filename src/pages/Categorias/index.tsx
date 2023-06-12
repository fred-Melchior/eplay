import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categorias = () => {
  const { data: actionGames, isLoading: loadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: loadingFight } = useGetFightGamesQuery()
  const { data: rpgGames, isLoading: loadingRPG } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: loadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportsGames, isLoading: loadingSports } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Açao"
        background="black"
        id="action"
        isLoading={loadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={loadingSports}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={loadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={loadingRPG}
      />
      <ProductsList
        games={simulationGames}
        title="Simulacao"
        background="black"
        id="simulation"
        isLoading={loadingSimulation}
      />
    </>
  )
}

export default Categorias

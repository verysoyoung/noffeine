import type { NextPage } from 'next'
import SearchForm from 'components/search/SearchForm'
import Map from 'components/map/Map'
const Home: NextPage = () => {
  return (
    <>
      <SearchForm />
      <Map />
    </>
  )
}

export default Home

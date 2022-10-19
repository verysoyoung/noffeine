import type { NextPage } from 'next'
import SearchForm from '@components/search/SearchForm'
import Footer from '@components/layout/Footer'
const Home: NextPage = () => {
  return (
    <>
      <SearchForm />
      Home
      <Footer />
    </>
  )
}

export default Home

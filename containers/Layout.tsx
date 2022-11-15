import React from 'react'
import Footer from 'components/layout/Footer'
import styled from 'styled-components'
import SearchForm from 'components/search/SearchForm'
type AppLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: AppLayoutProps) {
  return (
    <Wrap>
      <ContentWrap>
        <SearchForm />
        {children}
      </ContentWrap>
      {/* <Footer /> */}
    </Wrap>
  )
}

const ContentWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  position: relative;
`

const Wrap = styled.div`
  width: 100%;
`

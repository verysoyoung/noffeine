import React from 'react'
import styled from 'styled-components'
import SearchForm from 'components/search/SearchForm'
import Menu from 'components/layout/Menu'
import { useState } from 'react'
type AppLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: AppLayoutProps) {
  const [click, setClick] = useState(false)
  return (
    <Wrap>
      <Menu click={click} />
      <ContentWrap>
        <SearchForm setClick={setClick} click={click} />
        {children}
      </ContentWrap>
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

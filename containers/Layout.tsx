import React from 'react'
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import styled from 'styled-components'
type AppLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: AppLayoutProps) {
  return (
    <Wrap>
      <Header />
      <ContentWrap>{children}</ContentWrap>
      <Footer />
    </Wrap>
  )
}

const ContentWrap = styled.div`
  max-width: 800px;
  margin: 0 auto 20px;
  height: 73vh;
`

const Wrap = styled.div`
  width: 100%;
`

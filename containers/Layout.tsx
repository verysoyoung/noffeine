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
      {children}
      <Footer />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

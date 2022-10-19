import styled from 'styled-components'
export default function SearchForm() {
  return (
    <Wrap>
      <Form placeholder="카페검색" />
      <Button>검색</Button>
    </Wrap>
  )
}

const Button = styled.button``
const Form = styled.input``
const Wrap = styled.div``

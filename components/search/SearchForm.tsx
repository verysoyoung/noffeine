import styled from 'styled-components'
export default function SearchForm() {
  return (
    <Wrap>
      <Form placeholder="카페검색" />
      <Button>검색</Button>
    </Wrap>
  )
}

const Button = styled.button`
  width: 20%;
`
const Form = styled.input`
  width: 80%;
`
const Wrap = styled.div`
  width: 100%;
  display: flex;
`

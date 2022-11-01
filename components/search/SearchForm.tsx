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
  padding: 20px 10px;
`
const Form = styled.input`
  width: 80%;
  padding: 20px 10px;
`
const Wrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`

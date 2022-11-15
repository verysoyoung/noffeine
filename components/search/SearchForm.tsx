import styled from 'styled-components'
export default function SearchForm() {
  return (
    <Wrap>
      <Menu>햄버거</Menu>
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
  padding: 20px 10px 20px 80px;
`
const Menu = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: 1px solid orange;
  color: orange;
  top: 5px;
  left: 5px;
  display: flex;
  justify-content: center;
`
const Wrap = styled.div`
  width: 90%;
  display: flex;
  position: absolute;
  z-index: 10;
  top: 15px;
  left: 5%;
`

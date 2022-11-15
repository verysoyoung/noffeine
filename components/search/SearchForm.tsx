import styled from 'styled-components'

interface ClickProps {
  setClick: () => void
  click: boolean
}
export default function SearchForm({ setClick, click }: ClickProps) {
  return (
    <Wrap>
      <MenuClick
        onClick={() => {
          setClick(!click)
        }}
      ></MenuClick>
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
const MenuClick = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: orange;
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

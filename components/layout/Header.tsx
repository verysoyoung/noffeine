import styled from 'styled-components'

export default function Header() {
  return (
    <Wrap>
      <Menu>메뉴</Menu>
    </Wrap>
  )
}
const Menu = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`
const Wrap = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  padding: 20px 0;
  background-color: #fa6037;
  position: absolute;
  top: 10px;
  left: 0;
  margin: 0 auto;
`

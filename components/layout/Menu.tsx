import styled from 'styled-components'

interface OnClickProps {
  click: boolean
}

export default function Menu({ click }: OnClickProps) {
  return (
    <Wrap click={click}>
      <MenuWrap>
        <Profile>(프로필)소뿡</Profile>
        <MenuList>저장된 카페</MenuList>
        <MenuList>마이페이지</MenuList>
      </MenuWrap>
    </Wrap>
  )
}

const MenuList = styled.li`
  padding: 10px 0;
  cursor: pointer;
`
const MenuWrap = styled.ul``
const Profile = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`
const Wrap = styled.div`
  background-color: #ffffff;
  height: 100vh;
  padding: 30px;
  width: 300px;
  z-index: 20;
  position: fixed;
  top: 0;
  left: ${props => (props.click ? `left:0` : `-300px`)};
`

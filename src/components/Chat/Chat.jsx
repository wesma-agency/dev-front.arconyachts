import MessageIcon from 'assets/icons/message.svg'
import React from 'react'
import styled from 'styled-components'
import { color } from 'utils/vars'
const StyledSocial = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.backgroundDark};
  cursor: pointer;
  position: fixed;
  right: 63px;
  bottom: 160px;
`

const Chat = () => {
  return (
    <StyledSocial>
      <MessageIcon />
    </StyledSocial>
  )
}

export default Chat

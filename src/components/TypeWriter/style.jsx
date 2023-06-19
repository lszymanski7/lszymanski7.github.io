import styled, { keyframes } from 'styled-components'

export const StyledContainer = styled.div`
  display: inline-block;
  font-size: 5rem;
`

export const StyledText = styled.span`
  color: black;
  display: inherit;
`

const blink = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const StyledCursor = styled.span`
  animation: ${blink} 0.5s ease infinite alternate-reverse;
  color: black;
  display: inherit;
`

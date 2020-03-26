import styled from 'styled-components'

export const StyledModalWrapper = styled.div `
  display: flex;

  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`

export const StyledModal = styled.div `
background-color: lightskyblue;
padding: 1rem;
border-radius: 1rem;
overflow: hidden;
min-height: 150px;
display: flex;
flex-direction: column;
`

export const StyledModalHeader = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const StyledModalBody = styled.div `
flex-grow: 1;
`

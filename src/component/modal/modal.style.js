import styled from 'styled-components';

export const StyledModalHeader = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`

export const StyledModalBody = styled.div`
  flex-grow: 1;
`

export const StyledModal = styled.div`
  background-color: lightcyan;
  padding: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  min-height: 150px;
  display: grid;
  grid-gap: 10px;
`

export const StyledModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`
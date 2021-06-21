import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from '../components/Modal'
import { Button } from '../components/Button'

const Statistics = () => {
  const [ modal, setModal ] = useState(false)

  return (
    <Wrapper>
      <button onClick={() => setModal(true)}>open modal</button>
      <Modal 
        title="Are you sure you want to cancel this list?"
        isOpen={modal}
        handleDismiss={() => setModal(false)}
      >
        <>
          <Button variant="ghost">cancel</Button>
          <Button variant="warning">Yes</Button>
        </>
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 50px;
`

// const StyledMain = styled(Main)`
//   flex: 1;
// `

export default Statistics
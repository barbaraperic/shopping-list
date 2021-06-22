import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from '../components/Modal'
import { Button } from '../components/Button'
import ProgressBarCards from '../containers/ProgressBarCards'
import { topItems, topCategories } from '../mock-api'

const Statistics = () => {
  const [ modal, setModal ] = useState(false)

  return (
    <Wrapper>
      <CardWrapper>
        <ProgressBarCards 
          text="Top items"
          data={topItems}
          variant="items"
        />
        <ProgressBarCards 
          text="Top categories"
          data={topCategories}
          variant="category"
        />
      </CardWrapper>
      {/* <button onClick={() => setModal(true)}>open modal</button>
      <Modal 
        title="Are you sure you want to cancel this list?"
        isOpen={modal}
        handleDismiss={() => setModal(false)}
      >
        <>
          <Button variant="ghost">cancel</Button>
          <Button variant="warning">Yes</Button>
        </>
      </Modal> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* display: flex; */
  margin: 50px;
`

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// const StyledMain = styled(Main)`
//   flex: 1;
// `

export default Statistics
import React, { useState } from 'react';
import styled from 'styled-components';
// import Modal from '../components/Modal'
// import { Button } from '../components/Button'
import ProgressBarCards from '../containers/ProgressBarCards';
import Chart from '../components/Chart';
import Navigation from '../containers/Navigation';
import { EditItemSidebar } from '../containers/Sidebar';
import { SubHeader } from '../components/Text';
import { topItems, topCategories } from '../mock-api';
import { QUERIES } from '../style/constants';

const Statistics = () => {
  // const [ modal, setModal ] = useState(false);

  return (
    <Main>
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
      <SubHeader>Monthly Summary</SubHeader>
      <Chart />
    </Main>
  )
}

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

const Wrapper = styled.div`
  display: flex;
`

const Main = styled.main`
  padding: 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;
`

const CardWrapper = styled.div`
  /* width: 700px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 65px;

  > * {
    margin-right: 20px;
  }
/* 
  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    align-items: end;
  } */
`

export default Statistics
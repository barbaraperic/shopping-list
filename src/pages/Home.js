import styled from 'styled-components';
import Modal from '../components/Modal'
import { Button } from '../components/Button'

const Home = () => {
  return (
    <Wrapper>
      <Modal title="Are you sure you want to cancel this list?">
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

export default Home
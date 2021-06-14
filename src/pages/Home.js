import styled from 'styled-components';
// import Main from '../containers/Main';
// import SidebarLeft from '../containers/SidebarLeft'
// import SidebarRight from '../containers/SidebarRight'
// import SaveInput from '../components/SaveInput'
import { TextAreaInput } from '../components/Input/index';

const Home = () => {
  return (
    <Wrapper>
      <TextAreaInput 
        label="Optional"
        placeholder="Enter a note" 
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

// const StyledMain = styled(Main)`
//   flex: 1;
// `

export default Home
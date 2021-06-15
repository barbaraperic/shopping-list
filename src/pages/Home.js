import { useState } from 'react'
import styled from 'styled-components';
// import Main from '../containers/Main';
// import SidebarLeft from '../containers/SidebarLeft'
// import SidebarRight from '../containers/SidebarRight'
// import SaveInput from '../components/SaveInput'
import Select from '../components/Select';

const options = ["Fruit and vegetables", "Meat and fish", "Beverages"]

const Home = () => {
  const [valueState, setValueState] = useState("Fruit and vegetables")
  return (
    <Wrapper>
      <Select label="Hello" value={valueState} onChange={(e) => setValueState(e.target.value)}>
        {options.map(option => (
          <option key={option}>{option}</option>
          ))}
      </Select>
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
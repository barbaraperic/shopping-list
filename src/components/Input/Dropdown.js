import { useState } from 'react'
import styled from 'styled-components';
import Select from '../Select';

const options = ["Fruit and vegetables", "Meat and fish", "Beverages"]

const Dropdown = () => {
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

const Wrapper = styled.section`
  display: flex;
  margin: 50px;
`

export default Dropdown;
import { useState } from 'react'
import styled from 'styled-components';
import Select from '../Select';

const options = ["Enter a category", "Fruit and vegetables", "Meat and fish", "Beverages"]

const Dropdown = ({ label }) => {
  const [valueState, setValueState] = useState("Enter a category")
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Select label={label} value={valueState} onChange={(e) => setValueState(e.target.value)}>
        {options.map(option => (
          <option key={option}>{option}</option>
          ))}
      </Select>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* display: flex; */
`

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  display: inline-block;
`

export default Dropdown;
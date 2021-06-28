import { useState } from 'react'
import styled from 'styled-components';
import Select from '../Select';
import { COLORS } from '../../style/constants';

const options = ["Fruit and vegetables", "Meat and fish", "Beverages"]

const Dropdown = ({ label }) => {
  const [valueState, setValueState] = useState("Fruit and vegetables")
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

const DefaultOption = styled.option`
  color: ${COLORS.gray700};
`

export default Dropdown;
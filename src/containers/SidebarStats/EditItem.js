import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../../components/Input'

const EditItemSidebar = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Wrapper>
      <Label>
        <Checkbox 
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Text style={{ textDecoration: checked ? 'line-through' : 'none'}}>Chicken</Text>
      </Label>
    </Wrapper>
  )
}

const Wrapper = styled.section``

const Label = styled.label`
  display: flex;
  align-items: baseline;
`

const Text = styled.span`
  margin-left: 14px;
`

export default EditItemSidebar
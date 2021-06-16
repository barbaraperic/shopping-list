import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../../components/Input'
import Sidebar from '../Sidebar'
import MutedText from '../../components/MutedText'

const EditItemSidebar = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Sidebar>
      <MutedText>Meat and Fish</MutedText>
      <Label>
        <Checkbox 
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Text style={{ textDecoration: checked ? 'line-through' : 'none'}}>Chicken</Text>
      </Label>
    </Sidebar>
  )
}

const Label = styled.label`
  display: flex;
  align-items: baseline;
`

const Text = styled.span`
  margin-left: 14px;
`

export default EditItemSidebar
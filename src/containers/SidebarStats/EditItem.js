import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../../components/Input'
import Sidebar from '../Sidebar'
import MutedText from '../../components/MutedText'
import SelectButton from '../../components/SelectButton'

const shoppingList = [
  {
    item: 'chicken',
    quantity: '2 pcs',
    id: 1
  },
  {
    item: 'salmon',
    quantity: '2 pcs',
    id: 2
  },
  {
    item: 'pork',
    quantity: '1 pcs',
    id: 3
  }
]

const EditItemSidebar = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState([])

  const handleChange = (id) => {
    const checkboxArray = [...selectedCheckbox]
    const index = checkboxArray.indexOf(id);

    if (index > -1) {
      checkboxArray.splice(index, 1)
    } else {
      checkboxArray.push(id)
    }

    setSelectedCheckbox(checkboxArray)
  }
  
  return (
    <Sidebar>
      <MutedText>Meat and Fish</MutedText>
      {shoppingList.map(listItem => (
        <Wrapper key={listItem.id}>
          <Label>
            <Checkbox 
              checked={selectedCheckbox.includes(listItem.id)}
              onChange={() => handleChange(listItem.id)}
            />
            <Text 
              style={{ textDecoration: selectedCheckbox.includes(listItem.id) ? 'line-through' : 'none'}}
            >
              {listItem.item}
            </Text>
          </Label>
          <SelectButton>{listItem.quantity}</SelectButton>
        </Wrapper>
      ))}
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

const Wrapper = styled.section`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 16px;
`

export default EditItemSidebar
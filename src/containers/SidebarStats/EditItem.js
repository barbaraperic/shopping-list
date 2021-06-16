import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../../components/Input'
import Sidebar from '../Sidebar'
import MutedText from '../../components/MutedText'
import SelectButton from '../../components/SelectButton'
import { 
  shoppingListFruit, 
  shoppingListProtein, 
  shoppingListBeverages 
} from '../../mock-api/shoppingList'

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
      <MutedText>Fruit and vegetables</MutedText>
      <Wrapper>

        {shoppingListFruit.map(listItem => (
          <Item key={listItem.id}>
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
          </Item>
        ))}
        <MutedText>Meat and Fish</MutedText>
        {shoppingListProtein.map(listItem => (
          <Item key={listItem.id}>
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
          </Item>
        ))}
        <MutedText>Beverages</MutedText>
        {shoppingListBeverages.map(listItem => (
          <Item key={listItem.id}>
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
          </Item>
        ))}
      </Wrapper>
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
  overflow: scroll;
`

const Item = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 16px;
`

export default EditItemSidebar
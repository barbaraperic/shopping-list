import React, { useState} from 'react';
import styled from 'styled-components';
import { Checkbox } from '../../components/Input'
import { MutedText } from '../../components/Text'
import { Button, QuantityButton } from '../../components/Button'
import { AddItemCard } from '../../components/Card';
import { Icon } from '../../assets';
import { 
  shoppingListFruit, 
  shoppingListProtein, 
  shoppingListBeverages 
} from '../../mock-api';
import SidebarWrapper from './SidebarWrapper';
import { COLORS } from '../../style/constants';
import CheckboxSection from './CheckboxSection';

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
    <StyledSidebarWrapper>
      <Header>
      <AddItemCard />
      <TextWrapper>
        <Title>Shopping List</Title>
        <Icon id="edit" size={16}/>
      </TextWrapper>
      <Scrollbar>
        <CheckboxSection 
          title="Fruit and vegetables"
          apiData={shoppingListFruit}
          selectedCheckbox={selectedCheckbox}
          handleChange={handleChange}
        />
        <CheckboxSection 
          title="Meat and fish"
          apiData={shoppingListProtein}
          selectedCheckbox={selectedCheckbox}
          handleChange={handleChange}
        />
        <CheckboxSection 
          title="Beverages"
          apiData={shoppingListBeverages}
          selectedCheckbox={selectedCheckbox}
          handleChange={handleChange}
        />
      </Scrollbar>
      </Header>
      <Footer>
        <Button variant="tertiary">cancel</Button>
        <Button variant="secondary">Complete</Button>
      </Footer>
    </StyledSidebarWrapper>
  )
}

const StyledSidebarWrapper = styled(SidebarWrapper)`
  padding: 0;
`

const Header = styled.div`
  flex: 1;
  padding: 40px;
  background-color: ${COLORS.lightPrimary};
  max-height: calc(100vh - 130px);
`

const Title = styled.h3`
  font-weight: normal;
  font-size: 24px;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 40px 0;
`

const Scrollbar = styled.div`
  overflow: auto; 
  height: 200px;
`

const Footer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 130px;
`

export default EditItemSidebar;
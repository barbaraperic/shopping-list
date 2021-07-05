import styled from 'styled-components';
import { Input, TextArea, Dropdown } from '../../components/Input'
import { Button } from '../../components/Button'
import { SubHeader } from '../../components/Text'
import SidebarWrapper from './SidebarWrapper';

const AddItemSidebar = () => {
  return (
    <SidebarWrapper>
      <SubHeader>Add a new item</SubHeader>
      <Form>
        <Input label="Name" placeholder="Enter a name" type="text"/>
        <TextArea label="Note (optional)" placeholder="Enter a note"/>
        <Input label="Image (optional)" placeholder="Enter a url" text="url"/>
        <Dropdown label="Category"/>
      <ButtonWrapper>
        <Button variant="tertiary">cancel</Button>
        <Button variant="primary">Save</Button>
      </ButtonWrapper>
      </Form>
    </SidebarWrapper>
  )
}

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  min-height: 130px;
  flex: 1;
`

export default AddItemSidebar
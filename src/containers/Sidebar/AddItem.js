import styled from 'styled-components';
import { Input, TextArea, Dropdown } from '../../components/Input'
import { Button } from '../../components/Button'
import { SubHeader } from '../../components/Text'
import SidebarWrapper from './SidebarWrapper';

const AddItemSidebar = (props) => {
  const [newItem, setNewItem] = useState({})


  return (
    <SidebarWrapper>
      <SubHeader>Add a new item</SubHeader>
      <Form onSubmit={handleSubmit}>
        <Input 
          label="Name" 
          placeholder="Enter a name" 
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ name: e.target.value})}
        />
        <TextArea 
          label="Note (optional)" 
          placeholder="Enter a note"
          value={newItem.note}
          onChange={(e) => setNewItem({ note: e.target.value})}
        />
        <Input 
          label="Image (optional)" 
          placeholder="Enter a url" 
          text="url"
          value={newItem.imageUrl}
          onChange={(e) => setNewItem({ imageUrl: e.target.value})}
        />
        {/* <Dropdown label="Category"/> */}
      <ButtonWrapper>
        <Button variant="tertiary">cancel</Button>
        <Button variant="primary" type="submit">Save</Button>
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
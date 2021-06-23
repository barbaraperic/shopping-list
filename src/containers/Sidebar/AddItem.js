import styled from 'styled-components';
import { Input, TextArea, Dropdown } from '../../components/Input'
import { Button } from '../../components/Button'

const AddItemSidebar = () => {
  return (
    <Aside>
      <Section>
        <Input label="Name" placeholder="Enter a name" type="text"/>
        <TextArea label="Note (optional)" placeholder="Enter a note"/>
        <Input label="Image (optional)" placeholder="Enter a url" text="url"/>
        <Dropdown label="Category"/>
      </Section>
      <ButtonWrapper>
        <Button variant="tertiary">cancel</Button>
        <Button variant="primary">Save</Button>
      </ButtonWrapper>
    </Aside>
  )
}

const Aside = styled.aside`
  max-height: 100vh;
`

const Section = styled.section`
  width: 380px;
  max-height: calc(100vh - 130px);
  padding: 40px;
  display: flex;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 130px;
`

export default AddItemSidebar
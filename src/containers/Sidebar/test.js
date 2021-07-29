import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarWrapper from './SidebarWrapper';
import { Input, TextArea } from '../../components/Input'
import { Button } from '../../components/Button'
import { SubHeader } from '../../components/Text'

const Test = () => {
  // const [newItem, setNewItem] = useState({
  //   name: '',
  //   note: '',
  //   imageUrl: ''
  // })

  // const handleData = value => {
  //   setNewItem(prevState => ({ ...prevState, ...value }));
  // };

  return (
    <SidebarWrapper>
      <SubHeader>Add a new item</SubHeader>
      <Form onSubmit={() => {}}>
        <Input 
          label="Name" 
          placeholder="Enter a name" 
          type="text"
          // value={newItem.name}
          // onChange={(e) => handleData({ name: e.target.value})}
        />
        <TextArea 
          label="Note (optional)" 
          placeholder="Enter a note"
          // value={newItem.note}
          // onChange={(e) => handleData({ note: e.target.value})}
        />
        <Input 
          label="Image (optional)" 
          placeholder="Enter a url" 
          text="url"
          // value={newItem.imageUrl}
          // onChange={(e) => handleData({ imageUrl: e.target.value})}
        />
        {/* <Dropdown label="Category"/> */}
      <ButtonWrapper>
        <Button variant="tertiary">cancel</Button>
        <Button variant="primary" type="submit">Save</Button>
      </ButtonWrapper>
      </Form>
    </SidebarWrapper>
  );
};

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

export default Test;
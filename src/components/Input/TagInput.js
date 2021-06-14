import { useState } from 'react';
import styled from 'styled-components';

export const TagInput = () => {
  const [input, setInput] = useState(""); 
  const [tags, setTags] = useState([]); 

  const onKeyDown = (e) => {
    const { key } = e
    const trimmedInput = input.trim();

    if (key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)) {
      setTags((prevState) => [...prevState, trimmedInput])
      setInput('');
    }
  }

  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((item, i) => i !== index));
  }
  
  return (
    <Wrapper>
      {tags.map((tag, index) => (
        <Tag key={tag}>
          {tag}
        <button onClick={() => deleteTag(index)}>x</button>
        </Tag>)
      )}
      <InputText 
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        value={input}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
  width: 309px;
  /* max-width: 100%; */
  padding-left: 14px;
  border: 1px grey solid;
  border-radius: 5px;
  color: black;
  margin: 50px;
`
const InputText = styled.input`
  width: 100%;
  min-width: 50%;
  border: none;
  background-color: transparent;
  border-radius: 5px;
  padding: 14px;
  padding-left: 14px;
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0;
  margin-right: 10px;
  padding: 0 10px;
  padding-right: 5px;
  border: 1px solid orange;
  border-radius: 5px;
  background-color: orange;
  white-space: nowrap;
  color: white;

  button {
    display: flex;
    padding: 6px;
    border: none;
    background-color: unset;
    cursor: pointer;
    color: white;
  }
`

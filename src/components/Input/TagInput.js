import { useState } from 'react';
import styled from 'styled-components';

export const TagInput = () => {
  const [input, setInput] = useState(""); 
  const [tags, setTags] = useState([]); 

  const onKeyDown = (e) => {
    console.log(e)
    const { key } = e
    const trimmedInput = input.trim();

    if (key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)) {
      setTags((prevState) => [...prevState, trimmedInput])
      setInput('');
    }
  }
  
  return (
    <Wrapper>
      {tags.map(tag => <div key={tag}>{tag}</div>)}
      <InputText 
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        value={input}
      />
    </Wrapper>
  )
}


const Wrapper = styled.div``
const InputText = styled.input``

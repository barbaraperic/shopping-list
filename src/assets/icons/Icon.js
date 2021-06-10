import { Search } from 'react-feather';
import styled from 'styled-components';

const icons = {
  search: Search
}

export const Icon = ({ id, size }) => {
  const Component = icons[id]

  if (!id) {
    throw new Error(`No ID for Icon component: ${id}`)
  }
  return (
    <Wrapper
    
      style={{
        '--size': size + 'px',
      }}
    >
      <Component size={size}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
`

import { Search, Plus, Minus, Trash } from 'react-feather';
import styled from 'styled-components';

const icons = {
  search: Search,
  plus: Plus,
  minus: Minus,
  trash: Trash
}

export const Icon = ({ id, size, className }) => {
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
      <Component size={size} className={className}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
`

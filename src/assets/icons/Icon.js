import { Search, Plus, Minus, Trash, Edit3, X } from 'react-feather';
import styled from 'styled-components';

const icons = {
  search: Search,
  plus: Plus,
  minus: Minus,
  trash: Trash,
  edit: Edit3,
  remove: X
}

export const Icon = ({ id, size, className }) => {
  const Component = icons[id]

  if (!id) {
    throw new Error(`No ID for Icon component: ${id}`)
  }
  return (
    <Wrapper
      className={className}
      style={{
        '--size': size + 'px',
      }}
    >
      <Component size={size} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
`

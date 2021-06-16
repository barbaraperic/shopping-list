import { Search, Plus, Minus, Trash, Edit3, X, Check } from 'react-feather';
import styled from 'styled-components';

const icons = {
  search: Search,
  plus: Plus,
  minus: Minus,
  trash: Trash,
  edit: Edit3,
  remove: X,
  check: Check
}

export const Icon = ({ id, size, className, onClick }) => {
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
      onClick={onClick}
    >
      <Component size={size} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
`

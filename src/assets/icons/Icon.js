import { Search } from 'react-feather';
import styled from 'styled-components';

const icons = {
  search: Search
}

export const Icon = ({ id }) => {
  const Component = icons[id]

  if (!id) {
    throw new Error(`No ID for Icon component: ${id}`)
  }
  return (
    <Wrapper>
      <Component />
    </Wrapper>
  )
}

const Wrapper = styled.div``

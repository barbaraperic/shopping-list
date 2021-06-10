import styled from 'styled-components';
import { Icon } from '../assets'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  left: 20px;
`

const Input = styled.input`
  border-radius: 12px;
  height: 50px;
  width: 275px;
  border-color: transparent transparent;
  box-shadow: 0 2px 12px hsla(0, 0%, 0%, 0.04);
`

const SearchInput = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id="search"/>
      </IconWrapper>
      <Input />
    </Wrapper>
  )
}

export default SearchInput
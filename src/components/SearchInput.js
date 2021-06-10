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
  padding-left: 60px;

  &::placeholder {
    font-size: 16px;
    color: hsla(0, 0%, 74%, 1);
  }
`

const SearchInput = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id="search" size={18}/>
      </IconWrapper>
      <Input placeholder="search item"/>
    </Wrapper>
  )
}

export default SearchInput
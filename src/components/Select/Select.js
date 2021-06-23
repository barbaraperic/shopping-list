import styled from 'styled-components';
import { Icon } from '../../assets';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children, onClick }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper>
          <Icon id="remove" size={16} onClick={onClick}/>
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 309px;
  
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  
  border: 2px solid hsla(0, 0%, 74%, 1);
  font-size: 14px;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: black;
  }

  &::placeholder {
    color: hsla(0, 0%, 74%, 1);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export default Select;

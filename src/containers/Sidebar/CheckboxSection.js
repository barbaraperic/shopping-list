import styled from 'styled-components';
import { Checkbox } from '../../components/Input'
import { MutedText } from '../../components/Text'
import { QuantityButton } from '../../components/Button'

const CheckboxSection = ({ title, apiData, selectedCheckbox, handleChange }) => {
  return (
    <>
      <MutedText>{title}</MutedText>
      {apiData.map(data => (
        <Item key={data.id}>
          <Label>
            <Checkbox 
              checked={selectedCheckbox.includes(data.id)}
              onChange={() => handleChange(data.id)}
            />
            <Text 
              style={{ textDecoration: selectedCheckbox.includes(data.id) ? 'line-through' : 'none'}}
            >
              {data.item}
            </Text>
          </Label>
          <QuantityButton>{data.quantity}</QuantityButton>
        </Item>
      ))}
    </>
  );
};

const Item = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: flex;
  align-items: baseline;
`

const Text = styled.span`
  margin-left: 14px;
`

export default CheckboxSection;
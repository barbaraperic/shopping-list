import styled from 'styled-components';
import { MutedText } from '../components/Text'
import { QuantityButton } from '../../components/Button';

const Section = ({ title, children, item, edit, quantity }) => {
  return (
    <SectionWrapper>
      <MutedText>{title}</MutedText>
      <Wrapper>
        {children}
        <p>{item}</p>
        <QuantityButton edit={edit}>{quantity}</QuantityButton>
      </Wrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`

`

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 40px 0;
`

export default Section
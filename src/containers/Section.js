import styled from 'styled-components';
import MutedText from '../components/MutedText'

const Section = ({ title, children, item, edit, quantity }) => {
  return (
    <SectionWrapper>
      <MutedText>{title}</MutedText>
      <Wrapper>
        {children}
        <p>{item}</p>
        <SelectButton edit={edit}>{quantity}</SelectButton>
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
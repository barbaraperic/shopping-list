import styled from 'styled-components';
import { ProgressBar } from '../../components/Input'

const ProgressBarCards = ({ text, variant, data }) => {
  return (
    <Wrapper>
      <Title>{text}</Title>
      { data ? 
        data.map(item => (
        <ProgressBar
          key={item.name}
          text={item.name}
          value={item.value}
          variant={variant}
        />
        )) : null
      }
    </Wrapper>
  )
}

const Title = styled.h3`
  font-size: 24px;
  font-weight: lighter;
  margin-bottom: 40px;
`

const Wrapper = styled.section`


`

export default ProgressBarCards
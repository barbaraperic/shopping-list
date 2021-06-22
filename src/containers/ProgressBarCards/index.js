import styled from 'styled-components';
import { ProgressBar } from '../../components/Input'
import { SubHeader } from '../../components/Header'

const ProgressBarCards = ({ text, variant, data }) => {
  return (
    <Wrapper>
      <SubHeader>{text}</SubHeader>
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


const Wrapper = styled.section`
`

export default ProgressBarCards
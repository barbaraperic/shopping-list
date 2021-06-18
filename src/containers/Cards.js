import styled from 'styled-components'
import { Card }from '../components/Card';
import { Icon } from '../assets'

const Cards = ({ items }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <Card key={item} text={item}>
          <StyledIcon id="plus" size={16}/>
        </Card>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`

const StyledIcon = styled(Icon)`
  color: hsla(240, 2%, 76%, 1);
`

export default Cards
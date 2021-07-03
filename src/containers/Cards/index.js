import styled from 'styled-components'
import { Card }from '../../components/Card';
import { Icon } from '../../assets'

const Cards = ({ items, children }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <Card key={item} text={item}>
          {children}
        </Card>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
`

const StyledIcon = styled(Icon)`
  color: hsla(240, 2%, 76%, 1);
`

export default Cards
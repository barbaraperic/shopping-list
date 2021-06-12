import styled from 'styled-components'
import Card from '../components/Card';



const Cards = ({ items }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <Card key={item} text={item}/>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`

export default Cards
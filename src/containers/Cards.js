import styled from 'styled-components'
import Card from '../components/Card';

const fruits = ["Avocado", "Banana", "Bunch of carrots", "Watermelon"]

const meatAndFish = ["Chicken", "Pork", "Salmon"]

const beverages = ["Water", "Wine"]

const Cards = () => {
  return (
    <Wrapper>
      {fruits.map(fruit => (
        <Card key={fruit} text={fruit}/>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`

export default Cards
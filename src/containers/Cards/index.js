import styled from 'styled-components'
import { Card }from '../../components/Card';
import { Icon } from '../../assets'

const Cards = ({ items, children }) => {

  const API_KEY = `${process.env.REACT_APP_API_KEY}`
  const API_ID = `${process.env.REACT_APP_API_ID}`

  const handleClick = (item) => {
    fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${API_ID}&app_key=${API_KEY}&ingr=${item}&nutrition-type=cooking
    `)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  return (
    <Wrapper>
      {items.map(item => (
        <Card key={item} text={item} onClick={() => handleClick(item)}>
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
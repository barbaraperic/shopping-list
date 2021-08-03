import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { LinkBack } from '../../components/Text';
import SidebarWrapper from './SidebarWrapper';
import { useSelector } from 'react-redux';

const DescriptionSidebar = () => {
  const [ list, setList ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { cardId } = useParams()
  const { items } = useSelector(state => state.items)


  const API_KEY = `${process.env.REACT_APP_API_KEY}`
  const API_ID = `${process.env.REACT_APP_API_ID}`


  useEffect(() => {
    fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${API_ID}&app_key=${API_KEY}&ingr=${items}&nutrition-type=cooking
      `)
      .then(response => response.json())
      .then(data => {
        setList(data.parsed)
        setLoading(false)
      })
  }, [items])

  if (loading === true) {
    return <p>loading</p>
  }


  console.log(items)

  return (
    <StyledSidebarWrapper>
      <LinkBack to="/"/>
        {list.map(item => (
          <div key={item.food.label}>
          <Image src={item.food.image} alt={`${item.food.label}`}/>
          <Title>name</Title>
          <h3>{item.food.label}</h3>
          <Title>category</Title>
          <p>{item.food.category}</p>
          <Title>note</Title>
          {/* <LongText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</LongText> */}
          </div>
        ))}
      <Footer>
        <Button variant="tertiary">delete</Button>
        <Button variant="primary">Add to list</Button>
      </Footer>
    </StyledSidebarWrapper>
  )
}

const StyledSidebarWrapper = styled(SidebarWrapper)`
  background: white;
`;

// const StyledLink = styled(Link)`
//   color: hsla(38, 95%, 51%, 1);
//   font-size: 14px;
//   margin: 10px 0 20px 0;
// `

const Image = styled.img`
  height: 220px;
  width: 100%;
  border-radius: 25px;
`

const Title = styled.h4`
  font-weight: normal;
  color: hsla(0, 0%, 51%, 1);
  font-size: 12px;
  margin: 30px 0 10px 0;
`

const LongText = styled.p`
  line-height: 1.3;
  margin-bottom: 16px;
`

const Footer = styled.div`
  background-color: white;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export default DescriptionSidebar;
import styled from 'styled-components'
import { Switch, Route, useLocation, useRouteMatch } from 'react-router-dom';
import { Card }from '../../components/Card';
import { Icon } from '../../assets';

const CustomLink = ({ to, children }) => {
  const match = useRouteMatch(to.pathname)

  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  )
}


const Cards = (props) => {

  // const params = useParams()
  // const { path } = useRouteMatch()
  // console.log('p', path)


  // const API_KEY = `${process.env.REACT_APP_API_KEY}`
  // const API_ID = `${process.env.REACT_APP_API_ID}`

  // const handleClick = (item) => {
  //   fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${API_ID}&app_key=${API_KEY}&ingr=${item}&nutrition-type=cooking
  //   `)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  const location = useLocation();
  const { url } = useRouteMatch()
  const { title, list } = props;

  return (
    <Wrapper>
      <h3>{title}</h3>
      <ul>
        {list.map(item => (
          <CustomLink
            key={item}
            to={{
              pathname: `${url}/${slugify(item)}`,
              search: location.search
            }}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
     
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
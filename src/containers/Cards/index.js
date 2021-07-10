import styled from 'styled-components'
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import { Card }from '../../components/Card';
import { Icon } from '../../assets';


const Cards = ({ items, children }) => {

  const params = useParams()
  const { path } = useRouteMatch()
  console.log('p', path)


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
      {/* {items.map(item => (
        <Card
          // url={`${url}/item/${item}`}
          key={item} 
          text={item} 
          onClick={() => handleClick(item)}
        >
          {children}
        </Card>
      ))} */}
      <Switch>
        <Route path={`${path}/:cardId`}>
          <Card />
        </Route>
        {/* <Route path="*">
          <div className="sidebar-instruction">Select a team</div>
        </Route> */}
      </Switch>
    </Wrapper>
  )
}

{/* <div className='container two-column'>
      <Sidebar 
        title="Articles"
        list={articles.map(article => article.title)}
      />
      <Switch>
        <Route path={`${path}/:articleId`}>
          <Article />
        </Route>
      </Switch>
    </div> */}



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
import styled from 'styled-components';
import Button from '../Button';

const CardDescription = () => {
  return (
    <Section>
      <Link>&larr; back</Link>
      <Image src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="avocado"/>
      <Header>name</Header>
      <h3>Avocado</h3>
      <Header>category</Header>
      <p>Fruit and vegetables</p>
      <Header>note</Header>
      <LongText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</LongText> 
      <Footer>
        <Button variant="tertiary">delete</Button>
        <Button variant="primary">Add to list</Button>
      </Footer>
    </Section>
  )
}

const Section = styled.section`
  padding: 20px 40px;
  height: 100vh;
  width: 389px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Link = styled.a`
  color: hsla(38, 95%, 51%, 1);
  font-size: 14px;
  margin: 10px 0 20px 0;
`

const Image = styled.img`
  height: 220px;
  width: 100%;
  border-radius: 25px;
`

const Header = styled.h4`
  font-weight: normal;
  color: hsla(0, 0%, 51%, 1);
  font-size: 12px;
  margin: 30px 0 10px 0;
`

const LongText = styled.p`
  line-height: 1.3;
`

const Footer = styled.div`
  background-color: white;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export default CardDescription
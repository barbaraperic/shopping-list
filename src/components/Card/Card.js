import styled from 'styled-components';

const Card = ({ text, children }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 50px;
  width: 182px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px hsla(0,0%,0%,.05);
  padding: 15px 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  cursor: pointer;
`

const Text = styled.p`
  line-height: 1.4;
`

export default Card
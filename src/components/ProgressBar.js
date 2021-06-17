import styled from 'styled-components';

const ProgressBar = ({ value }) => {
  return (
    <Wrapper>
      <Label for="file">
        <p>Downloading progress</p>
        <span>{value}%</span>
      </Label>
      <Progress id="file" value={value} max="100"> {value}% </Progress>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

const Progress = styled.progress`
  width: 332px;
`

export default ProgressBar
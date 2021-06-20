import styled from 'styled-components';
import { COLORS } from '../../style/constants';

const STYLES = {
  items: {
    backgroundColor: `${COLORS.primary}`
  },
  category: {
    backgroundColor: `${COLORS.blue}`
  }
}

const ProgressBar = ({ value, variant }) => {
  const styles = STYLES[variant]

  if (!styles) {
    throw new Error(`Unknown variant passed to ProgressBar: ${variant}`);
  }

  return (
    <Container>
      <Label>
        <p>Banana</p>
        <span>{value}%</span>
      </Label>
      <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <BarWrapper>
          <Bar 
            style={{
              "--width": value + '%',
              "--background-color": styles.backgroundColor
            }}
          />
        </BarWrapper>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`

`

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

const Wrapper = styled.div`
  background-color: ${COLORS.gray800};
  border-radius: 4px;
  width: 332px;
`

const Bar = styled.div`
  height: 6px;
  width: var(--width);
  background-color: var(--background-color);
  border-radius: 4px;
`

const BarWrapper = styled.div`
  /* border-radius: 4px;  */
  overflow: hidden;
`

ProgressBar.defaultProps = {
  variant: 'items'
}

export default ProgressBar
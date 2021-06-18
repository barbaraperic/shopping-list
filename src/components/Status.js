import styled from 'styled-components';
import { COLORS } from '../style/constants'

const STYLES = {
  completed: {
    color: `${COLORS.blue}`
  },
  canceled: {
    color: `${COLORS.red}`
  }
}

const Status = ({ children, className, type }) => {
  const styles = STYLES[type]

  if (!styles) {
    throw new Error(`Unknown type prop: ${type}`)
  }

  return (
    <Button 
      className={className}
      style={{
        '--color': styles.color
      }}
    >
      {children}
    </Button>
  )
}

const Button = styled.a`
  width: 76px;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color);
  background-color: transparent;
  border: 1px solid var(--color);
  cursor: pointer;
`

export default Status;
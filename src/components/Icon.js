import { List, RotateCcw, BarChart2 } from 'react-feather';

const icons = {
  list: List,
  rotate: RotateCcw,
  bar: BarChart2
};

const Icon = ({ id }) => {
  const Component = icons[id]

  if (!Component) {
    throw error(`No icon found for ID: ${id}`)
  }
  
  return (
    <div>
      <Component />
    </div>
  )
}

export default Icon;


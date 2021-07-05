import styled from 'styled-components';

const SidebarWrapper = ({ className, children }) => {
  return (
    <Aside className={className}>
      {children}
    </Aside>
  );
};

const Aside = styled.aside`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 380px;
  padding: 40px; 
`

export default SidebarWrapper;